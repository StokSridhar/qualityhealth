 import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
 import { outlinedInputClasses } from '@mui/material/OutlinedInput';

 export const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#D1D5DB',
            '--TextField-brandBorderHoverColor': '#212121',
            '--TextField-brandBorderFocusedColor': '#006658',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      }, 
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '1px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            }, 
        "&.Mui-error": {  
      backgroundColor: "#fef2f2", 
    },
     "&.Mui-disabled": {  
      backgroundColor: "white", 
    },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });