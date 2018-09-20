const express = require('express');
let router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "shoes";')
        .then((results) => {
            res.send(results.rows);
            console.log(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for shoes', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "shoes" ("name", "cost")
            VALUES ($1, $2);`,
            [req.body.name, req.body.cost])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error with SQL insert for shoes', error);
        res.sendStatus(500);
    });
});

module.exports = router;

