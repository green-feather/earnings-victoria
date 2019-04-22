const mysql = require('mysql2');
// const companyData = require('../stockList');
const faker = require('faker')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "robinhood"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Mysql Connected!");
//   con.query("CREATE DATABASE robinhood", function (err, result) {
//     if (err) throw err;
//     console.log("MySql Database created");
//   });
//   var createTableSql = "CREATE TABLE robinhood.earnings (id INT AUTO_INCREMENT PRIMARY KEY,\
//     name VARCHAR(255),\
//     actual_earnings DECIMAL(7,3),\
//     expected_earnings DECIMAL(7,3),\
//     quarter VARCHAR(255),\
//     quarter_num TINYINT\
//     )";

//   con.query(createTableSql, function (err, result) {
//     if (err) throw err;
//     console.log("Table earnings created");
//   });
// });


const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];
let quarterNumber = 0;
let companyName = faker.company.companyName()

let seedRecords = () => {
  if (count > 1000) {
    console.log('seeded million records')
    return;
  } else {
    let actualEarning = Math.random() * 7;
    let estimatedEarning = actualEarning;
    let quarterNumber = 0;
    // for (let quarter of EPSdate) {
    // quarter = 
    let range = Math.floor(Math.random() * 100);
    range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
    actualEarning *= (1 + range / 100);
    actualEarning = actualEarning.toFixed(2);

    let estimateRange = Math.floor(Math.random() * 100);
    estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
    estimatedEarning = actualEarning * (1 + estimateRange / 100);
    estimatedEarning = estimatedEarning.toFixed(2);
    if (err) console.log(err);
    var sql = `INSERT INTO earnings (name, actual_earnings, expected_earnings, quarter, quarter_num) VALUES ("${faker.company.companyName()}", ${Number(actualEarning)}, ${Number(estimatedEarning)}, '${quarter}', ${quarterNumber})`;
    con.query(sql, function (err, result) {
      if (err) console.log(err);
      console.log(`${count} record inserted`);
    });
    quarterNumber += 1;
    count++;
    // }      
    setImmediate(seedRecords);
  }
}
seedRecords();








