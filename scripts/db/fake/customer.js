import async from 'async';
import unique from 'unique-random';
import { Customer } from '../../../server/models';

const fake = require('fakerator')();

const fb = [
  'Dịch vụ rất tốt',
  'Phục vụ tốt, rất đáng đi',
  'Dịch vụ rất tốt, nhưng thời gian phục vụ còn hạn chế',
  'Phục vụ tạm ổn, cần tiếp tục cố gắng',
  'Phục vụ tận tâm, nhưng còn nhiều vấn đề về phương tiện',
  'Phương tiện quá cũ, cần đổi mới hoặc sửa chữa lại',
  'Thời gian chuyến đi quá dài, cần rút ngắn',
  'Máy lạnh quá nóng, cần sửa lại',
  'Cần cải thiện thái độ phục vụ của nhân viên',
  'Cần mở rộng địa bàn hoạt động',
  'Cần mở rộng phạm vi hoạt động',
  'Cần gia tăng số lượng chuyến trong ngày',
  'Cần gia tăng số trạm trung chuyển',
  'Cần nâng cấp hệ thống dịch vụ online',
  'Cần cải thiện thời gian giao dịch',
  'Thanh toán rất nhanh, hay',
  'Ngon :)',
  'Tuyệt cú mèo',
  'Hay vl',
  'Đi một lần là giền nha ae:)',
  'Rẻ quá chừng',
  'Má ơi, đi là một lần là không đi nữa đâu :(',
  'Tài xế ẩu quá',
  'Nhân viên quá tệ'
];
const fakeCustomer = () => {
  const ssn = fake.random.number(1000000000, 9999999999);
  const first_name = fake.names.firstName();
  const last_name = fake.names.lastName();
  const tel = fake.phone.number();
  const address = fake.address.street();
  const feed_back = Math.random() > 0.3 ? fb[fake.random.number(0, fb.length - 1)] : null;

  return {
    ssn,
    first_name,
    last_name,
    tel,
    address,
    feed_back
  };
};

const amountCustomer = 300;
export default () => new Promise((resolve, reject) => {
  const customers = [];
  for (let i = 0; i < amountCustomer; i++) customers.push(fakeCustomer());
  async.eachSeries(customers, (customer, cb) => {
    Customer.create(customer).then(customer => cb()).catch(err => cb(err));
  }, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
