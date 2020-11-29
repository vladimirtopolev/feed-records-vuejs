const entities = require('../../routes/records/entities');
const { SIMULATION_STATES } = entities;

module.exports = function () {
    entities.RECORDS
        .forEach(rec => {
            if (rec.simulationState !== SIMULATION_STATES.IN_PROGRESS) {
                return;
            }

            if (!rec.simulationStep) {
                rec.simulationStep = 1;
                return;
            }

            if (rec.simulationStep + 1 > rec.recordStep) {
                rec.simulationState = SIMULATION_STATES.NOT_STARTED;
                rec.simulationStep = 0;
                return;
            }

            rec.simulationStep++;
        });
}