const express = require('express');
const bodyParser = require('body-parser');
const shoeRouter = require('./routes/shoe.router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;

app.use('/shoes', shoeRouter);


app.listen(PORT, () => {
    console.log('server up on port', PORT);
});