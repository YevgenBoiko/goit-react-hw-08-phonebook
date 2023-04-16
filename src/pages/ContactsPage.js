import { Contacts } from '../components/Contacts/Contacts';
import { Filter } from '../components/Filter/Filter';
import { Form } from '../components/Form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Box } from '@mui/material';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <section>
        <title>Phonebook</title>
        <Form />
      </section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <title>Contacts</title>
        <Filter />

        <Contacts />
        {isLoading && !error && <b>Request in progress...</b>}
      </Box>
    </div>
  );
}
