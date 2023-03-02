import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery'

export default function HotelGallery() {
  const [category, setCategory] = useState('All Photos');
return (
  <>
  <div className="d-flex justify-content-center">
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: '',
      '& > *': {
        m: 0,
      },
    }}
  >
    
    <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => {setCategory('All Photos')}}>ALL PHOTOS</Button>
        <Button onClick={() => {setCategory('Rooms')}}>RESTAURANT</Button>
        <Button onClick={() => {setCategory('Restaurant')}}>ROOMS</Button>
        <Button onClick={() => {setCategory('Banquet')}}>Banquet</Button>
        <Button onClick={() => {setCategory('Property Pics')}}>Property Pics</Button>
      </ButtonGroup>

      
    </Box>
    </div>
    <Gallery category={category}/>
    </>
  );
}
