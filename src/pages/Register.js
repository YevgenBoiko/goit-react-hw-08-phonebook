import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';
import { Box, Button, TextField } from '@mui/material';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '500px',
          marginTop: '20px',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          maxRows={4}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{ width: '100px', alignSelf: 'center' }}
          type="submit"
        >
          Register
        </Button>
      </form>
    </Box>
  );
}
