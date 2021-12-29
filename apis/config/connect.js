const mysql = require('mysql');
// GET CONFIG DATA FROM VARIABLE
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = require('./data');

// CONNECT TO DB
const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  connectionLimit: 50,
  queueLImit: 50,
  waitForConnection: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log(` + ============ DATABASE CONNECTED ============ + \n`);
})

con.on('error', () => console.log('err'))

var del = con._protocol._delegateError;
con._protocol._delegateError = function (err, sequence) {
    if (err.fatal) {
        console.trace(`FATAL ERROR : ${err.message} `);
    }
    return del.call(this, err, sequence);
};

module.exports = con;