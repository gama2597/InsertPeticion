"use strict";
const os = require("os");

var currentDate = new Date();

var currentDate = new Date();

var dia = currentDate.getDate();
var mes = currentDate.getMonth() + 1;
var mes2 = mes < 10 ? "0" + mes : mes;
var año = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var fecha =
  año + "-" + mes2 + "-" + dia + " " + hours + ":" + minutes + ":" + seconds;

var currentUser = os.userInfo().username;

module.exports = {
  fecha,
  currentUser,
};
