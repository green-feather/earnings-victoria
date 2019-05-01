const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bigdata2', {useNewUrlParser: true});

const earningSchema = new mongoose.Schema({
  companyId: Number,
  company: String,
  earningsData: [Object],  
});

const Earning = mongoose.model('Earning', earningSchema);

module.exports = Earning;
