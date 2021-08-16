"use strict";

const sql = require("mssql");
const config = require("../Config/config.js").config;
const { fecha, currentUser } = require("../Constantes/Datos.js");

//INSERT
async function INSERT_CCM_PETICION(numOperacion) {
  var nomFase = "NULL";
  var usuModif = null;
  var fecModif = null;
  var indError = null;
  var descError = null;

  await console.log("Starting the insertion to table CCM_Peticion");
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(config);
    const result = await sql.query(
      "INSERT INTO CCM_PETICION(NOM_FASE, NUM_OPERACION, USU_CREACION, FEC_CREACION, USU_MODIF, FEC_MODIF, IND_ERROR, DESC_ERROR) VALUES" +
        "('" +
        nomFase +
        "'," +
        numOperacion +
        ",'" +
        currentUser +
        "','" +
        fecha +
        "'," +
        usuModif +
        "," +
        fecModif +
        "," +
        indError +
        "," +
        descError +
        ")"
    );

    //console.log("Rows Affected: " + result.rowsAffected);
   await console.log("Data inserted");
  } catch (err) {
    throw err;
  }
}

async function Query(numOperacion){
  await INSERT_CCM_PETICION(numOperacion)
}
module.exports = { Query };