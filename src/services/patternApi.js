import { API_HOST } from '@/config';

export const patternApi = {
    getPatterns() {
        return fetch(`${API_HOST}/patterns`)
            .then(res => res.json());
    },
}

export const adaptedRecordApi = {
    getItems() {
        return patternApi.getPatterns();
    },
}