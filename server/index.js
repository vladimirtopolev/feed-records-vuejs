const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const { PORT } = require('./config');
require('./backgroundActions');

const app = express();

const usersRoute = require('./routes/users');
const recordRoute = require('./routes/records');
const patternRoute = require('./routes/patterns');
const authenticationRoute = require('./routes/authentication');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../public'));
app.use(cookieParser());

app.get('/', function (req, res) {
    res.send("Hello world!");
});

app.use('/', authenticationRoute);
app.use('/users', usersRoute);
app.use('/records', recordRoute);
app.use('/patterns', patternRoute);


app.listen(PORT, () => {
    console.log('Listen ' + PORT);
})