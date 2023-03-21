const { createSlice } = require('@reduxjs/toolkit');

const initialContatcts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],
  filter: '',
};

const contactSlise = createSlice({
  name: 'contact',
  initialState: { initialContatcts },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlise.actions;
export default contactSlise.reducer;
