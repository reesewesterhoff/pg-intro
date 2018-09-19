const pg = require('pg');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const Pool = pg.Pool;

const pool = new Pool({
    database: 'shoe_store',  //name of database
    host: 'localhost',  //where is your database
    port: '5432',  //port for your database, 5432 default
    max: 10,  //how many connections(queries) at one time
    idleTimeoutMillis: 30000   //30 seconds to try to connect, otherwise give up
});

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log('error with postgres pool', error);
});

app.get('/shoes', (req, res) => {
    pool.query('SELECT * FROM "shoes";')
        .then((results) => {
            res.send(results.rows);
            console.log(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for shoes', error);
            res.sendStatus(500);
        });
});

app.listen(PORT, () => {
    console.log('server up on port', PORT);
});