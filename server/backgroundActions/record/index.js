const entities = require('../../routes/records/entities');
const { RECORD_STATES, SIMULATION_STATES } = entities;

module.exports = function () {
    entities.RECORDS
        .forEach(rec => {
            if (rec.recordState !== RECORD_STATES.IN_PROGRESS) {
                return;
            }

            if (rec.simulationState === SIMULATION_STATES.NOT_AVAILABLE){
                rec.simulationState = SIMULATION_STATES.NOT_STARTED;
            }

            if (!rec.recordStep) {
                rec.recordStep = 1;
                return;
            }

            rec.recordStep++;
        });
}