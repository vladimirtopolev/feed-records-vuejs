import { API_HOST } from '@/config';

export default {
    getUsers(limit = 10, offset = 0) {
        return fetch(`${API_HOST}/users?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
    },
    login(identifier, password) {
        return fetch(`${API_HOST}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ identifier, password })
        })
            .then(res => res.json());
    },
    logout() {
        return fetch(`${API_HOST}/logout`);
    }
}