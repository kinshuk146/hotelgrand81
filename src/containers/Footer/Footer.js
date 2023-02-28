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
        <Typography variant="body2" color="#100c3c">
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
                maxHeight: '60vh',
                marginTop: '2rem',
                margin:'auto'
            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    marginLeft: -1,
                    mt: 'auto',
                    backgroundColor:'#f9f9f9'
                    //backgroundImage: `url(https://wallpaperaccess.com/full/4128940.jpg)`,
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
                                                <h4 style={{color:'#100c3c'}}>OUR SERVICES</h4>
                                                <li><a className="footer-link">Rooms</a></li>
                                                <li><a className="footer-link">Banquet Hall</a></li>
                                                <li><a className="footer-link">Restaurant</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm">
                                            <ul style={{ listStyle: 'none' }}>
                                                <h4 style={{color:'#100c3c'}}>EVENTS</h4>
                                                <li><a className="footer-link">Weddings</a></li>
                                                <li><a className="footer-link">Corporate Meetings</a></li>
                                                <li><a className="footer-link">Birthday Parties</a></li>
                                                <li><a className="footer-link">Kitty</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg">

                                            <ul style={{ listStyle: 'none' }}>
                                                <h4 style={{color:'#100c3c'}}>ADDRESS</h4>
                                                <p style={{color:'#100c3c'}}>Vipul Plaza, First Floor Sector 81, Faridabad, Haryana 121002</p>
                                                <p className="footer-link" style={{color:'#100c3c'}}>Get Direction</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-around">
                                    <div class="row">
                                        
                                        <div class="col-sm">
                                            <ul>
                                                <img src="https://www.tripadvisor.in/img/cdsi/img2/awards/v2/tchotel_2020_LL-14348-2.png" />
                                                <div>
                                                    <div style={{paddingTop:'2rem'}}>
                                                        <InstagramIcon fontSize='large' style={{color:'#100c3c'}} />
                                                        <FacebookIcon fontSize='large' style={{color:'#100c3c'}} />
                                                        <YouTubeIcon fontSize='large'  style={{color:'#100c3c'}}/>
                                                        <WhatsAppIcon fontSize='large' style={{color:'#100c3c'}} />
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col-sm">
                                            <ul style={{listStyle:'none'}}>
                                                <li><a className="footer-link">Careers</a></li>
                                                <li><a className="footer-link">Terms And Conditions</a></li>
                                                <li><CallIcon fontSize='large' style={{color:'#100c3c'}}/><></><EmailIcon style={{color:'#100c3c'}} fontSize='large'/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    );
}