'use strict';

const express = require('express');
const { getAllTasks } = require('./task');

const app = express();
const port = 5003;
app.listen(port);

app.get('/task/', (req, res) => {
    res.json(getAllTasks());
});
