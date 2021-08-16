"use strict";

var config = {
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
};

module.exports = {
  config,
};
