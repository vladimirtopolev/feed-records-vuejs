const express = require('express')
const router = express.Router();
const { PATTERNS } = require('./entities');

let _PATTERNS = [...PATTERNS];

router.get('/', (req, res) => {
    res.send({
        items: _PATTERNS,
        count: _PATTERNS.length,
        offset: 0,
        limit: _PATTERNS.length
    });
});


module.exports = router;