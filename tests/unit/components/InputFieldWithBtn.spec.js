import { render, fireEvent } from '@testing-library/vue'
import InputFieldWithBtn from '@/components/InputFieldWithBtn.vue'
import userEvent from '@testing-library/user-event'

describe('InputFieldWithBtn.vue', () => {
    it('renders initial value in "preview" mode', () => {
        const value = 'title'
        const { getByText, queryByText } = render(InputFieldWithBtn, {
            props: { value }
        });
        getByText(value);
        getByText('Edit');
        expect(queryByText('Save')).toBeNull();
        expect(queryByText('Cancel')).toBeNull();
    });

    it('change into "edit" mode', async () => {
        const value = 'title'
        const { getByText, getByDisplayValue, queryByText } = render(InputFieldWithBtn, {
            props: { value }
        });
        const changeModeBtn = getByText('Edit');
        await fireEvent.click(changeModeBtn);

        getByDisplayValue(value);

        getByText('Save');
        getByText('Cancel')
        expect(queryByText('Edit')).toBeNull();
    });

    it('change value in "edit" mode and cancel changes to apply', async () => {
        const value = 'title'
        const { getByText, getByDisplayValue, queryByText } = render(InputFieldWithBtn, {
            props: { value }
        });

        const changeModeBtn = getByText('Edit');
        await fireEvent.click(changeModeBtn);

        const changedValue = 'title changed';
        const inputField = getByDisplayValue(value);

        //await userEvent.change(inputField, { target: { value: changedValue } })
        //userEvent.
        getByDisplayValue(changedValue);

        const cancellBtn = getByText('Cancel');
        await fireEvent.click(cancellBtn);

        getByText(value);
        getByText('Edit');
        expect(queryByText('Save')).toBeNull();
        expect(queryByText('Cancel')).toBeNull();
    });

    it('change value in "edit" mode and cancel changes to apply', async () => {
        const initValue = 'title1'
        const { getByText, emitted, getByRole} = render(InputFieldWithBtn, {
            props: { initValue }
        });

        const changeModeBtn = getByText('Edit');
        await fireEvent.click(changeModeBtn);

        const changedValue = 'title changed';
        userEvent.type(getByRole('textbox'), changedValue);
        userEvent.click( getByText('Save'))

        const emittedEvents = emitted();

        expect(emittedEvents).toHaveProperty('save');
        expect(emittedEvents.save[0][0]).toEqual(changedValue);
    })
})
