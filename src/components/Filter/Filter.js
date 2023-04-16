// import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        sx={{ width: '500px' }}
        id="outlined-multiline-flexible"
        label="Find contacts by name"
        multiline
        maxRows={4}
        type="text"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </>
  );
};
