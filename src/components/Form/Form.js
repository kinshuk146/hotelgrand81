import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';




export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className="form" style={{padding:'1rem'}}>
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: 'Check-in', end: 'Check-out' }}>
      <DateRangePicker value={value} onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>

<Autocomplete id="free-solo-demo" freeSolo  renderInput={(params) => <TextField {...params} label="freeSolo" />}></Autocomplete>
  </div>

  );
}