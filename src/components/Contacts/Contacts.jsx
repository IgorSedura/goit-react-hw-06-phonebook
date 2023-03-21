// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';

import { Filter } from './Filter/Filter';
import { FormAddContact } from './FormAddConatact/FormAddContact';
import { PhonebookList } from './ContactBookList/ContactBookList';
import { Container, Input } from './ConatactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from 'redux/actions';
import { getFilterContacts } from 'redux/selector';
// import toast, { Toaster } from 'react-hot-toast';

export const Contacts = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      {/* <Toaster /> */}
      <FormAddContact onSubmit={onAddContact} />
      <Filter />
      <Input onChange={onSetFilter} value={filter} type="text" />
      <PhonebookList contacts={contacts} removeContact={onRemoveContact} />
    </Container>
  );
};
