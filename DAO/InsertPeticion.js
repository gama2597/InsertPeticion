"use strict";

const sql = require("mssql");
const config = require("../Config/config.js").config;
const { fecha, currentUser } = require("../Constantes/Datos.js");

sql.on('error', err => {
  
  if (err){
  console.log(err.message);
  } else {
    console.log('Connection to the database has been established successfully.');
  }

})

//INSERT
async function INSERT_CCM_PETICION(numOperacion) {
  let nomFase = "NULL";
  let usuModif = null;
  let fecModif = null;
  let indError = null;
  let descError = null;

  let pool = await sql.connect(config);
  try {
    let result = await pool.request().query(
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
    console.log("Data inserted: " + result.rowsAffected);

   sql.close();
   return result;
  } catch (err) {
    console.log(err.message)
    sql.close
  }
}

module.exports = { INSERT_CCM_PETICION };