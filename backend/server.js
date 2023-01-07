const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const log = require('debug')('server');
const logError = require('debug')('server:error');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

(async () => {
    try {
        app.use(cors());
        app.options('*', cors());
        app.use(cookieParser());

        const router = require('./routes');

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/api/v1', router);

        const mongoUser = process.env.MONGO_USER;
        const mongoPassword = process.env.MONGO_PASSWORD;
        const mongoIP = process.env.MONGO_IP;
        const mongoPort = process.env.MONGO_PORT;
        
        if (!mongoUser || !mongoPassword || !mongoIP || !mongoPort || !host || !port) {
            throw new Error('Mongo env variables are not defined');
        }
        await mongoose.connect(
            `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.gomcefl.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        log('Connected to MongoDB');

        app.listen(port, host, () => {
            log(`Server listening at http://${host}:${port}`);
        });

        mongoose.connection.on('error', (err) => {
            logError(err);
        });
    } catch (err) {
        logError(err);
    }
})();