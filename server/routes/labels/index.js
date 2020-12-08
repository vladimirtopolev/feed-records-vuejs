const createCRUDRouter = require('../common/createCRUDrouter');
const entities = require('../../entities');

module.exports = createCRUDRouter(entities, 'LABELS');