const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');

const port = process.env.PORT || 3000;
const app = express();
const DATA_FILE = path.join(__dirname, './data.json');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
