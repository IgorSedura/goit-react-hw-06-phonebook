import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contactsSlise';
import filterReducers from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
  },
});
