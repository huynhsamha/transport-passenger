import async from 'async';
import unique from 'unique-random';

import { TripDaily, BusStation, BusType, Driver, Assistant, Bus, Trip } from '../../../server/models';

const fake = require('fakerator')();

export default () => new Promise((resolve, reject) => {
  async.waterfall([
    (cb) => {
      Driver.findAll({ logging: false }).then(ls => ls.map(o => o.id)).then(ids => cb(null, ids)).catch(err => cb(err));
    },
    (drivers, cb) => {
      Assistant.findAll({ logging: false }).then(ls => ls.map(o => o.id)).then(ids => cb(null, drivers, ids)).catch(err => cb(err));
    },
    (drivers, assistants, cb) => {
      TripDaily.findAll({ logging: false }).then(ls => cb(null, drivers, assistants, ls)).catch(err => cb(err));
    },
    (drivers, assistants, tripDailies, cb) => {
      async.eachSeries(tripDailies, (tripDaily, cbTripDaily) => {
        async.waterfall([
          (cb) => {
            Bus.findAll({ where: { bus_type_id: tripDaily.bus_type_id }, logging: false })
              .then(ls => ls.map(o => o.id)).then(ids => cb(null, ids)).catch(err => cb(err));
          },
          (buses, cb) => {
            const trips = [];
            for (let i = -3; i < 20; i++) {
              const date = new Date();
              date.setDate(date.getDate() + i);
              trips.push({
                trip_daily_id: tripDaily.id,
                assistant_id: assistants[fake.random.number(0, assistants.length - 1)],
                driver_id: drivers[fake.random.number(0, drivers.length - 1)],
                bus_id: buses[fake.random.number(0, buses.length - 1)],
                depart_date: date,
                code: `${tripDaily.code}_${date.getFullYear()}${date.getMonth()}${date.getDate()}`,
                is_complete: i <= 0
              });
            }
            async.eachSeries(trips, async (trip, cbTrip) => {
              await Trip.create(trip);
              cbTrip();
            }, (err) => {
              if (err) return cb(err);
              return cb();
            });
          }
        ], (err) => {
          if (err) return cbTripDaily(err);
          return cbTripDaily();
        });
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
