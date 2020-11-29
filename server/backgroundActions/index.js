const cron = require('node-cron');

const simulationProcess = require('./sumulation');
const recordProcess = require('./record');

console.log('Start background process')
cron.schedule('*/1 * * * * *', () => {
    simulationProcess();
    recordProcess();
});