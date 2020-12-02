const express = require('express')
const router = express.Router();
const { createdPaginatedResponseFromRequest } = require('../../helpers/createPaginatedResponse');
const entities = require('../../entities');
const { v4 } = require("uuid")
const { RECORD_STATES, SIMULATION_STATES } = entities;

const skipRecordDependencies = record => {
    const { feedsMeta, ...recordWithoutDependencies } = record;
    return recordWithoutDependencies;
}

router.get('/', (req, res) => {
    res.send(createdPaginatedResponseFromRequest(req, entities.RECORDS.map(r => skipRecordDependencies(r))));
});

router.post('/', (req, res) => {
    const newItem = { ...req.body.item, id: v4() };
    newItem.recordState = RECORD_STATES.NOT_STARTED;
    newItem.simulationState = SIMULATION_STATES.NOT_AVAILABLE;
    newItem.created = new Date();
    newItem.recordStep = 0;
    if (!newItem.feedsMeta) {
        newItem.feedsMeta = [];
    }
    newItem.labels = [];
    entities.RECORDS = entities.RECORDS.concat(newItem);
    res.json(newItem);
})

router.get('/:recordId', (req, res) => {
    const recordId = req.params.recordId;
    const item = entities.RECORDS.find(record => record.id === recordId);
    res.send(item);
});

router.delete('/:recordId', (req, res) => {
    const recordId = req.params.recordId;
    const deletedItem = entities.RECORDS.find(r => r.id === recordId);
    entities.RECORDS = entities.RECORDS.filter(r => r.id !== recordId);
    res.json(deletedItem);
});

router.put('/:recordId', (req, res) => {
    const recordId = req.params.recordId;
    const prevItem = entities.RECORDS.find(rec => rec.id === recordId);
    const newItem = { ...prevItem, ...req.body.item };

    if (newItem.simulationState === SIMULATION_STATES.NOT_STARTED
        && prevItem.simulationState !== SIMULATION_STATES.NOT_STARTED
        && prevItem.simulationState !== SIMULATION_STATES.NOT_AVAILABLE) {
        newItem.simulationStep = 0;
    }
    entities.RECORDS = entities.RECORDS.map(r => r.id === recordId ? newItem : r);
    res.json(newItem);
});

router.get('/:recordId/feedsMeta', (req, res) => {
    const recordId = req.params.recordId;
    const record = entities.RECORDS.find(rec => rec.id === recordId);
    res.send(createdPaginatedResponseFromRequest(req, record.feedsMeta));
});

router.post('/:recordId/labels', (req, res) => {
    const recordId = req.params.recordId;
    const newLabel = req.body.label;
    const targetRecord = entities.RECORDS.find(r => r.id === recordId);

    const existedLabelIndex = targetRecord.labels.findIndex(l => l.step === newLabel.step);
    if (existedLabelIndex === -1) {
        targetRecord.labels.push(newLabel);
    } else {
        targetRecord.labels.splice(existedLabelIndex, 0, newLabel);
    }
    res.send(targetRecord);
});

router.delete('/:recordId/labels', (req, res) => {
    const recordId = req.params.recordId;
    const deletedLabel = req.body.label;
    const targetRecord = entities.RECORDS.find(r => r.id === recordId);
    targetRecord.labels = targetRecord.labels.filter(l => l.step !== deletedLabel.step);
    res.send(targetRecord);
});

module.exports = router;