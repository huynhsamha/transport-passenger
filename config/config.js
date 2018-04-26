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
  authenticationSecret: process.env.AUTHENTICATION_SECRET || 'YOUR AUTHENTICATION SECRET'
};
