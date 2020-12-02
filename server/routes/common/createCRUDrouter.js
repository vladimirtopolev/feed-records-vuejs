const express = require('express')
const { v4 } = require("uuid")

module.exports = function createCRUDRouter(entities, DOMAIN_NAME){
    const router = express.Router();

    router.get('/', (req, res) => {
       const items = entities[DOMAIN_NAME];
        res.send({
            items,
            count: items.length,
            offset: 0,
            limit: items.length
        });
    });

    router.post('/', (req, res) => {
        const newItem = { ...req.body.item, id: v4() };
        entities[DOMAIN_NAME] = entities[DOMAIN_NAME].concat(newItem);
        res.json(newItem);
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        const item = entities[DOMAIN_NAME].find(item => item.id === id);
        res.send(item);
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        const deletedItem = entities[DOMAIN_NAME].find(item => item.id === id);
        entities[DOMAIN_NAME] = entities[DOMAIN_NAME].filter(item => item.id !== id);
        res.json(deletedItem);
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const prevItem = entities[DOMAIN_NAME].find(item => item.id === id);
        const newItem = { ...prevItem, ...req.body.item };

        entities[DOMAIN_NAME] = entities[DOMAIN_NAME].map(item => item.id === id ? newItem : item);
        res.json(newItem);
    });

    return router;
}