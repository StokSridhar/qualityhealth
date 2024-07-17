import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { InputAdornment } from '@mui/material'; 

import EditIcon from '@mui/icons-material/Edit';   

const Datepicker = () => {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}> 
      <DateField 
        label="Date of birth"
        disableFuture 
         variant="filled"
          fullWidth 
          InputProps={{
        endAdornment: (
        <InputAdornment position="start">
        <EditIcon/>
        </InputAdornment>
        ),
        }}
      />
    </LocalizationProvider>
  )
}

export default Datepicker