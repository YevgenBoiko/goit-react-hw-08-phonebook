import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Box, Button, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Typography>Welcome, {name} </Typography>

      <Button
        variant="outlined"
        sx={{ height: '30px' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
//  onClick={() => dispatch(logOut())}

export default UserMenu;
