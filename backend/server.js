const express = require('express')
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose')
//const routes = require('./routes/api');
require('dotenv').config();
const path = require('path');

const app = express()
const port = process.env.PORT || 3000

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

//serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

//serve frontend on base url
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build'));
});

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})