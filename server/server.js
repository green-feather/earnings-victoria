require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;
const db = require('../database/index.js');
//let host = '54.218.30.17'
// app.use(express.static(`${__dirname}/../public/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../public')));
// app.use('/earnings/:id/', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/api/earnings', (req, res) => {
  // set Default data equal to 001
    db.getEarning("1", (data) => {
      res.status(200).json(data)
    })
});

app.get('/api/earnings/:id', (req, res) => {
  // set Default data equal to 001
    db.getEarning(req.params.id, (data) => {
      console.log(data);
      res.status(200).json(data)
    })
});

app.post('/api/earnings', function(req, res) {
  db.postEarnings(req.body)  
});

app.put('/api/earnings', function(req, res) {
  db.updateEarnings(req.body)  
});

app.listen(port, () => {
  console.log(`port`);
});
