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
  //await console.log("Starting the insertion to table CCM_Peticion");
  try {
    // make sure that any items are correctly URL encoded in the connection string
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

    //console.log("Rows Affected: " + result.rowsAffected);
   // await console.log("Data inserted");
   sql.close();
   return result;
  } catch (err) {
    console.log(err.message)
    sql.close
  }
}

/*async function Query(numOperacion){
  await INSERT_CCM_PETICION(numOperacion)
}*/
module.exports = { INSERT_CCM_PETICION };