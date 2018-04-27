const ONE_MINUTE = 60 * 60; // in seconds
const ONE_DAY = 60 * 60 * 24; // in seconds

module.exports = {
  session: {
    secret: process.env.SESSION_SECRET || 'YOUR SESSION SECRET IN FILE .ENV',
    maxAge: 7 * ONE_DAY * 1000 // in miliseconds
  },
  email: {
    address: process.env.EMAIL_ADDRESS || 'YOUR EMAIL IN FILE .ENV',
    password: process.env.EMAIL_PASSWORD || 'YOUR PASSWORD EMAIL IN FILE .ENV'
  },
  tokenExpire: 30 * ONE_DAY,
  tokenResetPassword: 15 * ONE_MINUTE,
  authenticationSecret: process.env.AUTHENTICATION_SECRET || 'YOUR AUTHENTICATION SECRET'
};
