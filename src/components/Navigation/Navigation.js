import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={NavLink}
        sx={{
          height: '30px',
        }}
        to={'/'}
      >
        Home
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          sx={{
            height: '30px',
          }}
          to={'/contacts'}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
