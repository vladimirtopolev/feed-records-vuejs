import createCRUDstore from "@/store/common/createCRUDstore";
import { adaptedRecordApi } from '@/services/labelsApi'

export const DOMAIN_NAME = 'labels'
const { mutations, actions, state } = createCRUDstore(adaptedRecordApi);

export default {
    namespaced: true,
    mutations,
    actions,
    state
}