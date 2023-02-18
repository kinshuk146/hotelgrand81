import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="white">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  export default function StickyFooter() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            minHeight: '92vh',
            backgroundColor: (theme) =>
              theme.palette.mode = 'black'
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              <div style={{color:'white'}}>My sticky footer can be found here.</div>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    );
  }