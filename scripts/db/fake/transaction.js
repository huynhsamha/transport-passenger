import async from 'async';
import unique from 'unique-random';

import { Customer, Seller, Transaction } from '../../../server/models';

const fake = require('fakerator')();


export default () => new Promise((resolve, reject) => {
  async.waterfall([
    (cb) => {
      Customer.findAll({ logging: false }).then(ls => ls.map(o => o.id)).then(ids => cb(null, ids)).catch(err => cb(err));
    },
    (customers, cb) => {
      Seller.findAll({ logging: false }).then(ls => ls.map(o => o.id)).then(ids => cb(null, customers, ids)).catch(err => cb(err));
    },
    (customers, sellers, cb) => {
      const paymentMethods = ['Cash', 'Visa', 'Master Card', 'PayPal', 'Bitcoin'];
      const statuses = ['Disapproved', 'Processing', 'Completed'];
      const transactions = [];
      customers.forEach((customer_id) => {
        let times = fake.random.number(1, 2);
        if (customer_id < 10) times = fake.random.number(10, 15);
        for (let i = times; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);

          transactions.push({
            customer_id,
            seller_id: sellers[fake.random.number(0, sellers.length - 1)],
            payment_method: paymentMethods[fake.random.number(0, paymentMethods.length - 1)],
            status: statuses[fake.random.number(0, statuses.length - 1)],
            timestamp: date,
            code: `TX${customer_id}_TS${date.getTime()}`
          });
        }
      });
      async.eachSeries(transactions, async (transaction, cb) => {
        await Transaction.create(transaction);
        cb();
      }, (err) => {
        if (err) return cb(err);
        return cb();
      });
    }
  ], (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
