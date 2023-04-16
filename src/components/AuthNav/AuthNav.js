import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={NavLink}
        sx={{
          height: '30px',
        }}
        to={'/register'}
      >
        Register
      </Button>

      <Button
        component={NavLink}
        sx={{
          height: '30px',
        }}
        to={'/login'}
      >
        Log In
      </Button>
    </Box>
  );
};
