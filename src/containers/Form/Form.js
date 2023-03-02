import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DatePicker from '../../components/DatePicker';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import  { useState, useEffect } from "react"
import { styled } from '@mui/system';
import { shadows } from '@mui/system';


const CustomButton = styled(Button)`
background-color: #100c3c;
color: white;

&:hover {
  background-color: white;
  color: #100c3c;
}`



function Form(props) {
  const [button, setButtonSize] = useState('small')

  const changeButtonSize=()=>{
  if(window.width>764)
  {
    setButtonSize('large');
  }
}

useEffect(() => {
changeButtonSize()
});

  return (
    <div>
      <div>
            <Box className="avail"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                '& > :not(style)': {
                  m: 2,
                  width: 1500,
                  height:90
                },
                
              }}
            >
              <Paper square={true} sx={{ boxShadow: 3 }}children={
                <div class="d-flex flex-row mb-3">
                <div class="p-2 flex-grow-1 mt-2"><DatePicker square={true} /></div>
                <div class="p-2 mt-2"><CustomButton size={`${window.width>764?'medium':'small'}`} variant="contained" sx={{borderRadius:'0'}}>Check Availability</CustomButton></div>
                </div>
              }/>
            </Box>
            </div>
    </div>
  )
}
              

export default Form
