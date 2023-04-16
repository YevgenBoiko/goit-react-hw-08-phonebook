import { Button, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contacts = () => {
  const contactList = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.filter.filter);

  const filteredContacts = contactFilter
    ? contactList.filter(contact =>
        contact.name.toLowerCase().includes(contactFilter.toLowerCase())
      )
    : contactList;
  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts ? (
        <List>
          {filteredContacts.map(
            contact =>
              contact.id && (
                <ListItem
                  sx={{
                    display: 'flex',
                    width: '500px',
                    justifyContent: 'space-between',
                  }}
                  key={contact.id}
                >
                  <Typography>{contact.name} </Typography>
                  <Typography>{contact.number}</Typography>
                  <Button
                    variant="outlined"
                    type="button"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </Button>
                </ListItem>
              )
          )}
        </List>
      ) : (
        ''
      )}
    </>
  );
};
