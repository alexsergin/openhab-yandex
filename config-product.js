// 1. Rename this to config.js
// 2. set user & pass for db
// 3. Genera
module.exports = {
  openhab: {
    host: ['https://myopenhab.org'],
  },
  mongodb: {
    hosts: [process.env.MONGO_HOST || '127.0.0.1'],
    db: process.env.MONGO_DB || 'openhabyandex',
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_PASSWORD || '',
  },
  https: {
    privateKey: '/mnt/data/root/private.pem',
    certificate: '/mnt/data/root/cert.crt',
    port: 443,
  },
};
