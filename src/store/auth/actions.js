import authAPI from '@/services/usersApi';
import { AvailableMutations } from '@/store/auth/mutations';

const { LOGOUT, SET_USER } = AvailableMutations;

export default {
    initUser(ctx) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            ctx.commit(SET_USER, user)
        }
        console.log('COMMIT', user)
    },
    login(ctx, { identifier, password }) {
        return authAPI.login(identifier, password)
            .then(user => {
                ctx.commit(SET_USER, user);
            })
    },
    logout(ctx) {
        return authAPI.logout()
            .then(() => {
                ctx.commit(LOGOUT);
            })
    }
}