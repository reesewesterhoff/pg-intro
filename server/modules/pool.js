const pg = require('pg');

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

module.exports = pool;