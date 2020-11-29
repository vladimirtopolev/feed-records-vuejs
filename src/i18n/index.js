import Vue from 'vue'
import VueI18n  from 'vue-i18n';
import en from './en.json';
import ru from './ru.json';

Vue.use(VueI18n);

export default new VueI18n({
    messages: {
        en,
        ru
    },
    locale: 'en',
    fallbackLocale: 'en',
});
