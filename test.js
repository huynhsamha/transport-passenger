console.log('testing...');

/**
 * Add your testing here
 */

// const fake = require('faker/locale/vi');
const fake = 1;

fake.seed(121);
console.log(fake.address.city());
console.log(fake.address.cityPrefix());
console.log(fake.address.citySuffix());
console.log(fake.address.latitude());
console.log(fake.address.longitude());
console.log(fake.address.zipCode());

console.log();
console.log(fake.company.companyName());

console.log(fake.internet.avatar());
console.log(fake.internet.email());
console.log(fake.internet.userName());
console.log(fake.internet.domainName());
console.log(fake.internet.url());

console.log();
console.log(fake.name.firstName());
console.log(fake.name.lastName());
console.log(fake.name.findName());
console.log(fake.phone.phoneNumberFormat(9));
console.log(fake.random.uuid());
