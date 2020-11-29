const RECORDS_COUNT = 1;
const FEEDS_COUNT = 10;

const RECORD_STATES = {
    IN_PROGRESS: 'IN_PROGRESS',
    NOT_STARTED: 'NOT_STARTED',
    NOT_AVAILABLE: 'NOT_AVAILABLE'
};

const SIMULATION_STATES = {
    IN_PROGRESS: 'IN_PROGRESS',
    PAUSED: 'PAUSED',
    NOT_STARTED: 'NOT_STARTED',
    NOT_AVAILABLE: 'NOT_AVAILABLE'
}
module.exports = {
    RECORD_STATES,
    SIMULATION_STATES,
    RECORDS: Array.from({ length: RECORDS_COUNT })
        .map((_, i) => ({
            id: `${i + 1}`,
            name: `Record ${i + 1}`,
            recordState: RECORD_STATES.NOT_STARTED,
            recordStep: 0,
            simulationState: SIMULATION_STATES.NOT_AVAILABLE,
            created: new Date(),
            feedsMeta: Array.from({ length: FEEDS_COUNT })
                .map((_, i) => ({
                    id: `${i + 1}`,
                    feedUrl: `http://site.com/${i + 1}`,
                    fileName: `feedName-${i + 1}`
                })),
            recordedFeeds: []
        }))
}
