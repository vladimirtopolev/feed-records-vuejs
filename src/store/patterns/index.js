import createCRUDstore from "@/store/common/createCRUDstore";
import { adaptedRecordApi } from '@/services/patternApi'

export const DOMAIN_NAME = 'patterns'
const { mutations, actions, state } = createCRUDstore(adaptedRecordApi);

export default {
    namespaced: true,
    mutations,
    actions,
    state
}