import { API_HOST } from '@/config';

export const labelsApi = {
    getItems() {
        return fetch(`${API_HOST}/labels`)
            .then(res => res.json());
    },
    deleteItem(item) {
        return fetch(`${API_HOST}/labels/${item.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json());
    },
    editItem(item) {
        return fetch(`${API_HOST}/labels/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ item })
        })
            .then(res => res.json());
    },

    createItem(item) {
        return fetch(`${API_HOST}/labels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ item })
        })
            .then(res => res.json());
    },
}

export const adaptedRecordApi = labelsApi;