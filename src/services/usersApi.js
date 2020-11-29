import { API_HOST } from '@/config';

export default {
    getUsers(limit = 10, offset = 0) {
        fetch(`${API_HOST}/users?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
    }
}