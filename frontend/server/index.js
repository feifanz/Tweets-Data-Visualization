const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log('app now is running on port:', port);
});




