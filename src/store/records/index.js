import createCRUDstore from "@/store/common/createCRUDstore";
import { adaptedRecordApi } from '@/services/recordsApi'

export const DOMAIN_NAME = 'records'
const { mutations, actions, state } = createCRUDstore(adaptedRecordApi);

export default {
    namespaced: true,
    mutations,
    actions,
    state
}