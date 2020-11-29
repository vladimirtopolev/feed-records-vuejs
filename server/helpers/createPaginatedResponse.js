const helpers = {
    createdPaginatedResponse(items, limit = 10, offset = 0) {
        return {
            count: items.length,
            limit,
            offset,
            items: items.slice(offset, offset + limit)
        }
    },
    createdPaginatedResponseFromRequest(req, items) {
        const limit = req.query.limit ? Math.min(+req.query.limit, 20) : 10;
        const offset = req.query.offset ? +req.query.offset : 0;
        return helpers.createdPaginatedResponse(items, limit, offset);
    }
}

module.exports = helpers;