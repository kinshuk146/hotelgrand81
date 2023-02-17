import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Form() {
  return (
    <div>
      <div>
            <Box className="avail"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                '& > :not(style)': {
                  m: 3,
                  width: 1500,
                  height:100
                },
              }}
            >
              <Paper/>
              
            </Box>
            </div>
    </div>
  )
}

export default Form
