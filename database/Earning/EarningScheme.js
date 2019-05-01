const mongoose = require('mongoose');
let host = '54.189.252.22'
mongoose.connect(`mongodb://${host}:27017/bigdata2`, {useNewUrlParser: true});

const earningSchema = new mongoose.Schema({
  companyId: Number,
  company: String,
  earningsData: [Object],  
});

const Earning = mongoose.model('Earning', earningSchema);

module.exports = Earning;
