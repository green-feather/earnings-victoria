const faker = require("faker");
const Earnings = require('../EarningScheme');

const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];
let companyId = 0;

async function seed() {
  for (let i = 0; i < 10000000; i++) {
    console.log(`on loop..................${i} `)    
    companyId++; 
    let earningsData = []
    for (let j = 0; j < 7; j++) {
      let actualEarning = Math.random() * 7;
      let estimatedEarning = Math.random() * 7;
      let range = Math.floor(Math.random() * 100);
      range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
      actualEarning *= (1 + range / 100);
      actualEarning = actualEarning.toFixed(2);
      let estimateRange = Math.floor(Math.random() * 100);
      estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
      estimatedEarning = actualEarning * (1 + estimateRange / 100);
      estimatedEarning = estimatedEarning.toFixed(2);

      earningsData.push({
        actualEarning: Number(actualEarning),
        estimatedEarning: Number(estimatedEarning),
        quarter: EPSdate[j],
        quarterNumber: j
      }
      )
    }

    let item = new Earnings({
      companyId: companyId,
      company: faker.company.companyName(),
      earningsData: earningsData
    });
    await item
      .save()
      .then(success => { })
      .catch(err => { });

  }
}
seed();

console.log('EOF...........................')
