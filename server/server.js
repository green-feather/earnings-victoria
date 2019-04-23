const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../public/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

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
      res.status(200).json(data)
    })
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
