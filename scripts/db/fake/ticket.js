import async from 'async';
import unique from 'unique-random';

import { Customer, Seller, Transaction, Trip, Ticket, TripDaily } from '../../../server/models';

const fake = require('fakerator')();


export default () => new Promise((resolve, reject) => {
  async.waterfall([
    (cb) => {
      Trip.findAll({
        logging: false, include: [
          { model: TripDaily, as: 'trip_daily' }
        ]
      }).then(ls => cb(null, ls)).catch(err => cb(err));
    },
    (trips, cb) => {
      Transaction.findAll({ logging: false }).then(ls => cb(null, trips, ls)).catch(err => cb(err));
    },
    (trips, transactions, cb) => {
      const tickets = [];
      transactions.forEach((transaction) => {
        const numTickets = fake.random.number(1, 5);
        for (let i = 0; i < numTickets; i++) {
          const idx = fake.random.number(0, trips.length - 1);
          const price_pay = trips[idx].trip_daily.price + fake.random.number(0, 20) * 100;
          tickets.push({
            transaction_id: transaction.id,
            trip_id: trips[idx].id,
            code: `${transaction.code}_${i}`,
            price_pay
          });
          transaction.total_price += price_pay;
        }
      });
      async.eachSeries(tickets, async (ticket, cbTicket) => {
        await Ticket.create(ticket);
        cbTicket();
      }, (err) => {
        if (err) return cb(err);
        return cb(null, transactions);
      });
    },
    (transactions, cb) => {
      async.eachSeries(transactions, async (transaction, cb) => {
        await transaction.update({ total_price: transaction.total_price });
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
