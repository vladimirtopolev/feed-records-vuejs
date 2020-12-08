export const AvailableMutations = {
    SET_USER: 'SET_USER',
    LOGOUT: 'LOGOUT'
}

const { SET_USER, LOGOUT } = AvailableMutations;

export default {
    [SET_USER](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;
    },
    [LOGOUT](state) {
        localStorage.removeItem('user');
        state.user = null;
    }
}