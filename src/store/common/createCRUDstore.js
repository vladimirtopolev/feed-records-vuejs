export default function createCRUDstore(API) {
    const state = {
        items: [],
        count: 0,
        offset: 0,
        limit: 10,
        isLoading: false,
        error: null,
        targetItem: null
    };

    const AvailableMutations = {
        SET_LOADING_STATUS: 'SET_LOADING_STATUS',
        SET_ERROR: 'SET_ERROR',
        SET_ITEMS: 'SET_ITEMS',
        SET_ITEM: 'SET_ITEM',
        CREATE_ITEM: 'CREATE_ITEM',
        EDIT_ITEM: 'EDIT_ITEM',
        DELETE_ITEM: 'DELETE_ITEM',
    }

    const { SET_LOADING_STATUS, SET_ERROR, SET_ITEMS, CREATE_ITEM, EDIT_ITEM, DELETE_ITEM, SET_ITEM } = AvailableMutations;

    const mutations = {
        [SET_LOADING_STATUS](state) {
            state.isLoading = true;
        },
        [SET_ERROR](state, error) {
            state.isLoading = false;
            state.error = error;
        },
        [SET_ITEMS](state, response) {
            state.isLoading = false;
            state.items = response.items;
            state.count = response.count;
            state.offset = response.offset;
            state.limit = response.limit;
        },
        [SET_ITEM](state, item) {
            state.targetItem = item;
        },
        [CREATE_ITEM](state, createdItem) {
            state.isLoading = false;
            state.targetItem = createdItem;
            state.items.push(createdItem);
        },
        [EDIT_ITEM](state, editedItem) {
            state.isLoading = false;
            state.targetItem = editedItem;
            const itemIndex = state.items.findIndex(item => item.id === editedItem.id);
            state.items.splice(itemIndex, 1, editedItem);
        },
        [DELETE_ITEM](state, deletedItem) {
            state.isLoading = false;
            state.targetItem = deletedItem;
            const itemIndex = state.items.findIndex(item => item.id === deletedItem.id);
            state.items.splice(itemIndex, 1);
        }
    };

    const actions = {
        getItems(ctx, payload) {
            ctx.commit(SET_LOADING_STATUS);
            return API.getItems(payload?.limit, payload?.offset)
                .then((list) => {
                    ctx.commit(SET_ITEMS, list)
                })
                .catch((e) => {
                    ctx.commit(SET_ERROR, e)
                })
        },
        getItem(ctx, itemId) {
            return API.getItem(itemId)
                .then(item => {
                    ctx.commit(SET_ITEM, item);
                })
        },
        editItem(ctx, item) {
            return API.editItem(item)
                .then((editedItem) => {
                    ctx.commit(EDIT_ITEM, editedItem)
                })
                .catch((e) => {
                    ctx.commit(SET_ERROR, e)
                })
        },
        deleteItem(ctx, item) {
            return API.deleteItem(item)
                .then((deletedItem) => {
                    ctx.commit(DELETE_ITEM, deletedItem)
                })
                .catch((e) => {
                    ctx.commit(SET_ERROR, e)
                });
        },
        createItem(ctx, item) {
            return API.createItem(item)
                .then(savedItem => {
                    ctx.commit(CREATE_ITEM, savedItem);
                })
                .catch((e) => {
                    ctx.commit(SET_ERROR, e)
                })
        }
    }

    return {
        AvailableMutations,
        actions,
        state,
        mutations
    }
}