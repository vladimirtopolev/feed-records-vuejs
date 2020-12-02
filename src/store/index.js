import Vue from 'vue'
import Vuex from 'vuex';

import auth from './auth';
import records from './records';
import patterns from './patterns';
import labels from './labels';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        records,
        patterns,
        labels
    }
})