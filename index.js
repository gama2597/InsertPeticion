"use strict";
const sql = require("mssql");
const config = require("./Config/config.js").config;

var numOperacion = process.argv[2];

const { INSERT_CCM_PETICION } = require("./DAO/InsertPeticion");

INSERT_CCM_PETICION(numOperacion);