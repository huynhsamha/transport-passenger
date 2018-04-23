// console.log('testing...');

// const div = (a, b) => new Promise((response, reject) => {
//   setTimeout(() => {
//     if (b == 0) reject(new Error('Not divide zero'));
//     else response(a / b);
//   }, 200);
// });

// const test_callback = async (a, b, cb) => {
//   try {
//     const res = await div(a, b);
//     cb(null, res);
//   } catch (err) {
//     cb(err);
//   }
// };

// const test_promise = async (a, b) => {
//   try {
//     return await div(a, b);
//   } catch (err) {
//     console.log('catch error');
//     return err;
//   }
// };

// test_callback(15, 0, (err, res) => {
//   // console.log(err);
//   // console.log(res);
// });

// test_promise(15, 0)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

import BusType from './server/models/busType';

const a = new BusType({
  id: '123',
  speed: 100,
  created_at: new Date(),
  timestamp: new Date().getTime()
});

console.log(a);

console.log(a.getStmtInsert());
console.log(a.getStmtUpdate());
