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
                Hotel Grand 81
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
                minHeight: '60vh',
            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    minHeight: '50vh',
                    backgroundImage: `url(https://wallpaperaccess.com/full/4128940.jpg)`,
                }
                }>
                <Container maxWidth="lg">
                    <Typography variant="body1">
                        <div style={{ color: 'white' }}>
                            <div class="d-flex justify-content-around">
                                <div class="row">
                                    <div class="col-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id numquam eveniet ipsa minus autem. Maiores odio delectus quo quod vel voluptate eveniet accusantium atque consequuntur! Similique cupiditate aliquam laboriosam id!
                                    </div>
                                    <div class="col-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id numquam eveniet ipsa minus autem. Maiores odio delectus quo quod vel voluptate eveniet accusantium atque consequuntur! Similique cupiditate aliquam laboriosam id!
                                    </div>
                                    <div class="col-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id numquam eveniet ipsa minus autem. Maiores odio delectus quo quod vel voluptate eveniet accusantium atque consequuntur! Similique cupiditate aliquam laboriosam id!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}