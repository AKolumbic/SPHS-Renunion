// Variable Declarations
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const ContactInfo = require('./Routers/ContactRouter');
const Uploads = require('./Routers/UploadRouter');
const server = express();
const port = process.env.PORT || 5555;
const db = process.env.MLAB;

// Database configuration
mongoose.Promise = global.Promise; // mongoose's promise library is deprecated, so we sub in the general ES6 promises here
const databaseOptions = {
    useNewUrlParser: true, // mongoose's URL parser is also deprecated, so we pass this in as a option to use the new one
};
mongoose.set('useCreateIndex', true); // collection.ensureIndex is also deprecated so we use 'useCreateIndex' instead

// Connecting to Database
mongoose
    .connect(db, databaseOptions) // mlab DB
    .then(response => {
        console.log("Connection Successful")
    })
    .catch(error => {
        console.log("Connection Failed")
    });

// Server set-up
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/info', ContactInfo);
server.use('/upload', Uploads);

// Sanity Check
server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

// Confirm the the API is running in Terminal.
server.listen(port, () => console.log(`API running on port: ${port}`));
