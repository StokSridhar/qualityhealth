import { FC } from 'react'
import { InputProps } from '../utils/Index';
import TextField from '@mui/material/TextField';  
import { InputAdornment } from '@mui/material'; 

const Input:FC<InputProps> = ({
    label,
    value,
    type,
    name,
    Icon,
    placeholder,
    onchange,
    error,
    helperText,
    disabled,
    onKeyUp
}) => {
   const InputStyles = {
    fontSize: '14px',  
    color: 'red'
  };
    return (
<> 
     <TextField 
    id="filled-basic"
    type={type}
    name={name}
    value={value}
    label={label}
    variant="filled"
    error={error}
    autoComplete='off'
    onKeyUp={onKeyUp}
    disabled={disabled}  
    helperText={helperText}
    onChange={onchange}
    placeholder={placeholder}
     style={InputStyles}
     sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                    background:'none'
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                    background:'none'
                  },
                  "&.MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.6)", // (default alpha is 0.38)
      background:'white'
    },
    "&.MuiFormHelperText-root.Mui-error": { //<--- here
      backgroundColor: "red",
      margin:0,
      paddingLeft: 10
    },
              }}
    fullWidth
        InputProps={{ 
        endAdornment: (
        <InputAdornment position="start">
       {Icon}
        </InputAdornment>
        ),
        }}
    /> 
</>
    )
}
export default Input