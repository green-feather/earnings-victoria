const mongoose = require('mongoose');
// const mysql = require('mysql')
const Earning = require('./Earning/EarningScheme');

const mongoUri = 'mongodb://localhost:27017/bigdata2';

mongoose.connect(mongoUri, { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });
const db = mongoose.connection;

const getEarning = (id, callback) => {
  const query = { companyId: id };
  Earning.find(query, (err, data) => {    
    newData = data[0].earningsData.map((quarter) => {
      quarter['companyId'] = data.companyId
      quarter['company'] = data.company
      return quarter
    })
    if (err) callback(err);
    callback(newData);
  });
};

// const postEarning = (body, callback) => {
//   var earning = Earning.new({
//     companyId: body.companyId,
//     company: body.company,
//     actualEarning: body.actualEarning,
//     estimatedEarning: body.estimatedEarning,
//     quarter: body.quarter,
//     quarterNumber: body.quarterNumber  
//   })

//   earning.save((err, data) => {
//     if (err) callback(err);
//     callback(data);
//   });
// };

// const updateEarning = (body, callback) => {
//   var query = { name: 'bourne' };
// Model.update(query, { name: 'jason bourne' }, options, callback)

//   var earning = Earning.new({
//     companyId: body.companyId,
//     company: body.company,
//     actualEarning: body.actualEarning,
//     estimatedEarning: body.estimatedEarning,
//     quarter: body.quarter,
//     quarterNumber: body.quarterNumber  
//   })

//   earning.save((err, data) => {
//     if (err) callback(err);
//     callback(data);
//   });
// }

module.exports = db;
module.exports.getEarning = getEarning;
// module.exports.postEarning = postEarning;
