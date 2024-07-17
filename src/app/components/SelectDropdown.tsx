"use client"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

const SelectDropdown = () => {
     const [gender, setGender] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  return (
     <Box sx={{ minWidth: 120 }}>
      
      <FormControl fullWidth sx={{ mt: 1, mb: 1 , fontSize: "14px" }} >
        <InputLabel id="gender">Gender</InputLabel>
        <Select
       
          labelId="gender"
          id="gender"
          value={gender}
          label="Gender"
          onChange={handleChange}
        sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectDropdown