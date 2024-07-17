import { FC } from 'react'
import { InputProps } from '../utils/Index';
import TextField from '@mui/material/TextField';  
import { InputAdornment } from '@mui/material'; 
import { customTheme } from '../utils/themes';
 import { ThemeProvider, useTheme } from '@mui/material/styles';

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
  const outerTheme = useTheme();
    return (
<> 
 <ThemeProvider theme={customTheme(outerTheme)}> 
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
    fullWidth
        InputProps={{ 
        endAdornment: (
        <InputAdornment position="start">
       {Icon}
        </InputAdornment>
        ),
        }}
    /> 
     </ThemeProvider>
</>
    )
}
export default Input