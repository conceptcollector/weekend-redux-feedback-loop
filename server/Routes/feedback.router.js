const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    const query =
        `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`;
    pool.query(query, req.body)
    .then((results) => {
        console.log(results);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Something failed on the database POST route', error);
    })
})

module.exports = router;