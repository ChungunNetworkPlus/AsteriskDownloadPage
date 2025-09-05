import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/index.html');
});

app.get('/Asterisk_Logo', (req, res) => {
  res.sendFile(__dirname + '/public/images/Asterisk_Logo.png');
});

app.get('/favicon', (req, res) => {
  res.sendFile(__dirname + '/public/images/favicon.ico');
});

app.listen(port);
