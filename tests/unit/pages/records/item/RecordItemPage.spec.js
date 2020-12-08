import render from '../../../../utils/render';
import RecordItemPage from '@/pages/records/item/RecordItemPage';
import { RECORDS } from '../../../mockEntities/records';
import flushPromises from 'flush-promises'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(RECORDS[0])
    })
);

describe('RecordItemPage.vue', () => {
    it('render item page', async () => {
        const { getByText, } = render(RecordItemPage, 'recordItem', '/record/:id', '/record/1');

        await flushPromises();
        getByText(RECORDS[0].name);

        // check that all feedsMeta apperead
        RECORDS[0].feedsMeta.map(meta => {
            getByText(meta.fileName);
            getByText(meta.feedUrl);
        });
    });
})
