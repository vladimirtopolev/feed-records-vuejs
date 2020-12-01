const express = require('express')
const router = express.Router();

const USERS = [
    {
        id: 1,
        firstName: 'Vlad',
        lastName: 'Topolev',
        email: 'test',
        password: 'test'
    }
];

module.exports.USERS = USERS;

router.get('/', (req, res) => {
    res.send(USERS);
});

module.exports = router;