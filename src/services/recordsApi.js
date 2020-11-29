import { API_HOST } from '@/config';

export const recordApi = {
    getRecords(limit = 10, offset = 0) {
        return fetch(`${API_HOST}/records?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
    },

    deleteRecord(item) {
        return fetch(`${API_HOST}/records/${item.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json());
    },

    editRecord(item) {
        return fetch(`${API_HOST}/records/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ item })
        })
            .then(res => res.json());
    },

    createRecord(item) {
        return fetch(`${API_HOST}/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ item })
        })
            .then(res => res.json());
    },

    getRecord(itemId) {
        return fetch(`${API_HOST}/records/${itemId}`)
            .then(res => res.json())
    },

    getRecordFeeds(recordId, limit = 100, offset = 0) {
        fetch(`${API_HOST}/records/${recordId}?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
    }
}

export const adaptedRecordApi = {
    getItems(limit, offset) {
        return recordApi.getRecords(limit, offset)
    },
    getItem(id) {
        return recordApi.getRecord(id);
    },
    deleteItem(item) {
        return recordApi.deleteRecord(item);
    },
    editItem(item) {
        return recordApi.editRecord(item);
    },
    createItem(item) {
        return recordApi.createRecord(item);
    }
}