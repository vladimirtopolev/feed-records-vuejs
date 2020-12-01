const express = require('express')
const router = express.Router();
const { PATTERNS } = require('../../entities');

router.get('/', (req, res) => {
    res.send({
        items: PATTERNS,
        count: PATTERNS.length,
        offset: 0,
        limit: PATTERNS.length
    });
});


module.exports = router;