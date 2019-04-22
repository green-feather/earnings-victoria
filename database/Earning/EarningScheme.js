const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bigdata', {useNewUrlParser: true});


const earningSchema = new mongoose.Schema({
  companyId: Number,
  company: String,
  actualEarning: Number,
  estimatedEarning: Number,
  quarter: String,
  quarterNumber: Number,  
});

const Earnings = mongoose.model('Earning', earningSchema);

module.exports = Earnings;
