import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery'
import './HotelGallery.css'
import { BorderAll, BorderAllOutlined } from '@mui/icons-material';

export default function HotelGallery() {
  const [category, setCategory] = useState('All Photos');
return (
  <>
  <div className="d-flex justify-content-center">
  <Box
    sx={{
      display: 'flex',
      maxWidth:'100%',
      flexDirection: 'row',
      alignItems: '',
      '& > *': {
        mt: 2,
        mb:2
      },
    }}
  >

    <div className="custom  container">
    <ButtonGroup sx={{
      display: 'flex',
      maxWidth:'100%',
      flexDirection: 'row',
      alignItems: '',
      '& > *': {
        m: 0,
      },
    }} variant="text" aria-label="text button group">
        <Button  className="custom" onClick={() => {setCategory('All Photos')}} style={{border:'0'}}>ALL</Button>
        <Button onClick={() => {setCategory('Restaurant')}} style={{border:'0'}}>RESTAURANT</Button>
        <Button onClick={() => {setCategory('Rooms')}} style={{border:'0'}}>ROOMS</Button>
        <Button onClick={() => {setCategory('Banquet')}} style={{border:'0'}}>Banquet</Button>
        <Button onClick={() => {setCategory('Property Pics')}} style={{border:'0'}}>Misc</Button>
      </ButtonGroup>
      </div>

      
    </Box>
    </div>
    <Gallery category={category}/>
    </>
  );
}
