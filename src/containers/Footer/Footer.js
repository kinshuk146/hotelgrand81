import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { YouTube } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

function Copyright() {
    return (
        <Typography variant="body2" color="white">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Hotel Grand 81
            </Link>{'   '}
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
                minHeight: '50vh',
                marginTop: '2rem'
            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 0,
                    marginLeft: -1,
                    mt: 'auto',
                    minHeight: '40vh',
                    backgroundImage: `url(https://wallpaperaccess.com/full/4128940.jpg)`,
                }
                }>
                <Container maxWidth="lg">
                    <Typography variant="body1">
                        <div style={{ color: 'white' }}>
                            <div class="d-flex flex-row mb-3">
                                <div class="d-flex justify-content-around">
                                    <div class="row">
                                        <div class="col-lg">
                                            <ul style={{ listStyle: 'none' }}>
                                                <h4>Our Services</h4>
                                                <li><a className="footer-link">Rooms</a></li>
                                                <li><a className="footer-link">Banquet Hall</a></li>
                                                <li><a className="footer-link">Restaurant</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm">
                                            <ul style={{ listStyle: 'none' }}>
                                                <h4>Events</h4>
                                                <li><a className="footer-link">Weddings</a></li>
                                                <li><a className="footer-link">Corporate Meetings</a></li>
                                                <li><a className="footer-link">Birthday Parties</a></li>
                                                <li><a className="footer-link">Kitty</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg">

                                            <ul style={{ listStyle: 'none' }}>
                                                <h4>Address</h4>
                                                <p>Vipul Plaza, First Floor Sector 81, Faridabad, Haryana 121002</p>
                                                <p className="footer-link">Get Direction</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-around">
                                    <div class="row">
                                        <div class="col-sm">
                                            <ul style={{ listStyle: 'none' }}>
                                                <h4>Connect</h4>
                                                <li>+91 9953035222</li>
                                                <li style={{ paddingRight: '1' }}>booking@hotelgrand81.com</li>
                                            </ul>
                                        </div>
                                        <div class="col-sm">
                                            <ul>
                                                <img src="https://www.tripadvisor.in/img/cdsi/img2/awards/v2/tchotel_2020_LL-14348-2.png" />
                                                <div>
                                                    <div>
                                                        <InstagramIcon fontSize='large' />
                                                        <FacebookIcon fontSize='large' />
                                                        <YouTubeIcon fontSize='large' />
                                                        <WhatsAppIcon fontSize='large' />
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-sm">
                                            <ul style={{listStyle:'none'}}>
                                                <li><a className="footer-link">Careers</a></li>
                                                <li><a className="footer-link">Terms And Conditions</a></li>
                                                <li><CallIcon fontSize='large'/><></><EmailIcon fontSize='large'/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                    <Copyright  />
                </Container>
            </Box>
        </Box>
    );
}