const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const log = require('debug')('server');
const logError = require('debug')('server:error');
const cors = require('cors');

require('dotenv').config();

const app = express()
const port = process.env.PORT
const host = process.env.HOST

// mongoose
//     .connect(process.env.DB, { useNewUrlParser: true })
//     .then(() => console.log(`Database connected successfully`))
//     .catch((err) => console.log(err));

// mongoose.Promise = global.Promise;

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

//app.use(bodyParser.json());

//app.use('/api', routes);

//handle api requests
app.get('/api/users', (req, res) => {
    console.log('GET request');
    
});

//send hello message on base url
const routes = require('./routes');
app.get('*', (req, res) => {
    res.send('hello');
});

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, host, () => {
    console.log(`Express server listening on port ${port}`)
})