import { Box, Button,  TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }));
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
          width: '500px',
          gap: '15px',
          marginTop: '20px',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
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
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          maxRows={4}
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          sx={{ width: '100px', alignSelf: 'center' }}
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
}
