// import { createReducer } from '@reduxjs/toolkit';
// import { addContact } from './actions';
// // import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';
// const initialStore = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   ],
//   filter: '',
// };

// // export const reducer = (store = initialStore, { type, payload }) => {
// //   switch (type) {
// //     case ADD_CONTACT:
// //       return { ...store, contacts: [...store.contacts, payload] };
// //     case REMOVE_CONTACT:
// //       const newContacts = store.contacts.filter(({ id }) => id !== payload);
// //       return { ...store, contacts: newContacts };
// //     case SET_FILTER:
// //       return { ...store, filter: payload };
// //     default:
// //       return store;
// //   }
// // }

// export const reducer = createReducer(initialStore, {
//   [addContact]: (state, action) => {
//     // return { ...state, contacts: [...state.contacts, action.payload] };
//     state.contacts.push(action.payload);
//   },
// });
