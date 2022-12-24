import mysql from "mysql";
import config from "./config.js";
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
});
console.log(config);
export default con;
