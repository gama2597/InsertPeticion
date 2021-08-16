"use strict";
const sql = require("mssql");
const config = require("./Config/config.js").config;

var numOperacion = process.argv[2];

const { Query } = require("./DAO/InsertPeticion");
sql.connect(config, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("***************************");
    console.log("Connected!!");
    console.log("***************************");
    Query(numOperacion)
  }
});