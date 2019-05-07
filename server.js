const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser());
app.use(express.static('public'))
app.post('/api/calc', (req, res) => {
    const { value1, value2 } = req.body;
    const result = parseFloat(value1) + parseFloat(value2);
    res.status(200).send({ result });
});

app.listen(8080);