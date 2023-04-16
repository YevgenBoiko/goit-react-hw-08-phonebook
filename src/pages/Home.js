import { Box, Typography } from '@mui/material';

import welcome from '../images/giphy.gif';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box>
        <img style={{ width: '400px' }} src={welcome} alt="ZSU"></img>
      </Box>
      <Typography sx={{ color: '#3e3f3ff3' }} variant="h5">
        Register or log in to your account to start using the app{' '}
      </Typography>
    </Box>
  );
}
