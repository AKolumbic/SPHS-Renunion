require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();
const port = process.env.PORT || 5555;
const db = process.env.mongo;

mongoose
    .connect(db) // mlab DB
    .then(response => {
        console.log("Connection Successful")
    })
    .catch(error => {
        console.log("Connection Failed")
    });

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});
  
server.listen(port, () => console.log(`API running on port: ${port}`));
