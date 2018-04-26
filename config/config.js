const ONE_DAY = 60 * 60 * 24; // in seconds

module.exports = {
  session: {
    secret: process.env.SESSION_SECRET || 'YOUR SESSION SECRET IN FILE .ENV',
    maxAge: 7 * ONE_DAY * 1000 // in miliseconds
  },
  gmail: {
    address: process.env.GMAIL_ADDRESS || 'YOUR NOREPLY GMAIL IN FILE .ENV',
    password: process.env.GMAIL_PASSWORD || 'YOUR PASSWORD GMAIL IN FILE .ENV'
  },
  tokenExpire: 30 * ONE_DAY
};
