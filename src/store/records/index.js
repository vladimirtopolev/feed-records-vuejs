import createCRUDstore from "@/store/common/createCRUDstore";
import { adaptedRecordApi, recordApi } from '@/services/recordsApi'

export const DOMAIN_NAME = 'records'
const CRUDStore = createCRUDstore(adaptedRecordApi);
const { AvailableMutations, state, mutations } = CRUDStore;

const actions = {
    ...CRUDStore.actions,
    editRecordLabel(ctx, { label, recordId }) {
        recordApi.editRecordLabel(recordId, label)
            .then(record => {
                ctx.commit(AvailableMutations.SET_ITEM, record)
            });
    },
    deleteRecordLabel(ctx, { label, recordId }) {
        recordApi.deleteRecordLabel(recordId, label)
            .then(record => {
                ctx.commit(AvailableMutations.SET_ITEM, record)
            })
    }
}
export default {
    namespaced: true,
    mutations,
    actions,
    state
}