module.exports = {
  AccessKeyID: process.env.AWS_ACCESS_KEY_ID || 'YOUR AWS ACCESS KEY',
  SecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'YOUR AWS SecretAccessKey',
  S3Bucket: process.env.AWS_S3_BUCKET || 'YOUR S3 BUCKET ON AWS'
};
