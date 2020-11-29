const express = require('express')
const router = express.Router();

const USERS = [
    {
        id: 1,
        firstName: 'Vlad',
        lastName: 'Topolev',
        email: 'topolev@mail.ru',
        password: '123'
    }
];

module.exports.USERS = USERS;

router.get('/', (req, res) => {
    res.send(USERS);
});

module.exports = router;