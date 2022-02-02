"use strict";

let config = {
  user: "US_SUPPORT",
  password: "Soapros123$",
  server: "ec2-3-220-130-14.compute-1.amazonaws.com",
  database: "ot_support",
  port: 1433,
  options: {
    enableArithAbort: true,
    encrypt: false,
    trustServerCertificate: false,
  },
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

module.exports = {
  config,
};
