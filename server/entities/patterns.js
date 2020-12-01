const PATTERNS_COUNT = 5;

module.exports = {
    PATTERNS: Array.from({ length: PATTERNS_COUNT })
        .map((_, i) => ({
            id: `${i + 1}`,
            name: `Pattern ${i + 1}`,
            created: new Date(),
            descriptin: `ECHL client ${i}; 3d party provider HockeySport, set name 1`,
            variables: [
                {
                    key: 'seasonId'
                },
                {
                    key: 'matchId'
                },
                {
                    key: 'teamHomeId'
                },
                {
                    key: 'teamAwayId'
                },
                {
                    key: 'gameInfo'
                },
                ...(() => i % 2 === 0 ? [{ key: 'testField' }] : [])()
            ],
            feeds: [
                {
                    fileName: 'schedule-${seasonId}',
                    feedUrl: 'http://sport.com/${seasonId}'
                },
                {
                    fileName: 'game-info-${matchId}',
                    feedUrl: 'http://sport.com/game-info/${matchId}'
                },
                {
                    fileName: 'team-stats-${teamHomeId}',
                    feedUrl: 'http://sport.com/team-stats/${gameInfo}/${teamHomeId}'
                },
                {
                    fileName: 'team-stats-${teamAwayId}',
                    feedUrl: 'http://sport.com/team-stats/${gameInfo}/${teamAwayId}'
                }
            ]
        }))
}
