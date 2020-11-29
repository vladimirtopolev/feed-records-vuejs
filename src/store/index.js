import Vue from 'vue'
import Vuex from 'vuex';

import records from './records';
import patterns from './patterns';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        records,
        patterns
    }
})