const faker = require('faker')
const companyData = [];
let companyObj = {};

Number.prototype.pad = function(n) {
  return new Array(n).join('0').slice((n || 2) * -1) + this;
}

for (let i = 0; i <= 1; i ++) {
  iStr = i.toString();
  companyObj = {
    id: iStr.padStart(3, '0'),
    ticker: faker.company.companySuffix(),
    company: faker.company.companyName()
  }
  companyData.push(companyObj);
  
}

module.exports = companyData;
