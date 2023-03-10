import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import { margin } from '@mui/system';
import  { useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RoomPhotoGallery from './RoomPhotoGallery';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius:'5%'
});


export default function ComplexGrid(props) {

    //const [width, setWidth] = useState(window.width);
    //setWidth(window.width/2);
    return (
        <>
        <Paper
            sx={{
                p: 2,
                flexGrow: 1,
                m: 3,
                my:5,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item >
                    <ButtonBase >
                        <Img width={400} alt="complex" src={props.imagelink} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {props.roomName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" margin={0}>
                                {props.roomDesc}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <div p={2}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Gallery</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <RoomPhotoGallery maxWidth=""/>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Ammenities</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>


                                                                
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography>Packages</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                


                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                <a><Button variant="outlined">Book Now</Button></a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {props.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <Box />
        </>
    );
}