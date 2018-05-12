console.log('testing...');

/**
 * Add your testing here
 */

// // const fake = require('faker/locale/vi');
// const fake = 1;

// fake.seed(121);
// console.log(fake.address.city());
// console.log(fake.address.cityPrefix());
// console.log(fake.address.citySuffix());
// console.log(fake.address.latitude());
// console.log(fake.address.longitude());
// console.log(fake.address.zipCode());

// console.log();
// console.log(fake.company.companyName());

// console.log(fake.internet.avatar());
// console.log(fake.internet.email());
// console.log(fake.internet.userName());
// console.log(fake.internet.domainName());
// console.log(fake.internet.url());

// console.log();
// console.log(fake.name.firstName());
// console.log(fake.name.lastName());
// console.log(fake.name.findName());
// console.log(fake.phone.phoneNumberFormat(9));
// console.log(fake.random.uuid());

// const AWS = require('aws-sdk');
// const fs = require('fs');
// const path = require('path');
// const awsconfig = require('./config/aws');

// AWS.config.update({
//   accessKeyId: awsconfig.AccessKeyID,
//   secretAccessKey: awsconfig.SecretAccessKey
// });

// const s3 = new AWS.S3();

// const filePath = path.join(__dirname, './server.js');

// s3.upload({
//   Bucket: awsconfig.S3Bucket,
//   Body: fs.createReadStream(filePath),
//   Key: `avatar/${Date.now()}_${path.basename(filePath)}`
// }, (err, data) => {
//   if (err) {
//     return console.log(err);
//   }

//   if (!data) {
//     return console.log('data is null');
//   }

//   console.log(data);
// });


const a = 'manager';
console.log(a.charAt(0).toUpperCase() + a.slice(1));
