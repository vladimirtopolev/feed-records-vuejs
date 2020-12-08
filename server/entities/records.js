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
            recordStep: 100,
            simulationState: SIMULATION_STATES.NOT_STARTED,
            created: new Date(),
            feedsMeta: Array.from({ length: FEEDS_COUNT })
                .map((_, i) => ({
                    id: `${i + 1}`,
                    feedUrl: `http://site.com/${i + 1}`,
                    fileName: `feedName-${i + 1}`
                })),
            recordedFeeds: [],
            labels: [
                {step: 1, label: 'Start game'},
                {step: 10, label: 'Start of 1st period'},
                {step: 20, label: 'Goal 0:1'},
                {step: 50, label: 'Start of 2nd period'},
                {step: 70, label: 'Finished of 2nd period'}
            ]
        }))
}
