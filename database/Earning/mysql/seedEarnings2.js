var mysql = require('mysql2-promise')();
const faker = require('faker');

mysql.configure({
  host: "localhost",
  user: "root",
  database: "robinhood"
});

const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];
let quarterNumber = 0;
let companyName = faker.company.companyName()
let companyId = 1;

async function seed() {
  for (let i = 0; i < 10000000; i++) { 
    console.log(`on loop..................${i} `)   
    let actualEarning = Math.random() * 7;
    let estimatedEarning = actualEarning;    
    
    if (quarterNumber === 7) {
      quarterNumber = 0;
      companyName = faker.company.companyName()
      companyId++;
    }
    
    quarter = EPSdate[quarterNumber];
    let range = Math.floor(Math.random() * 100);
    range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
    actualEarning *= (1 + range / 100);
    actualEarning = actualEarning.toFixed(2);

    let estimateRange = Math.floor(Math.random() * 100);
    estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
    estimatedEarning = actualEarning * (1 + estimateRange / 100);
    estimatedEarning = estimatedEarning.toFixed(2);
    
    quarterNumber++;

    var sql = `INSERT INTO earnings (name, actual_earnings, expected_earnings, quarter, quarter_num, company_id) VALUES ("${companyName}", ${Number(actualEarning)}, ${Number(estimatedEarning)}, '${quarter}', ${quarterNumber}, ${companyId})`;

    await mysql.query(sql).spread(function (result) {
      console.log(result);
    });
  }
}
seed();








