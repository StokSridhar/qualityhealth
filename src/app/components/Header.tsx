import React from 'react';
import Grid from '@mui/material/Grid'; 
import Image from 'next/image' 
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import DrawerContent from "./DrawerContent";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'

const Header = () => {
    const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
  };
  
  return (
    <> 
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', padding:'25px 20px 0 20px'}}>
      <Grid sx={{color: '#00bfa5'}}><Image src="/favicon.ico" width={30} height={30} alt="QualityHealth Logo" style={{verticalAlign:'middle'}}/> QualityHealth</Grid>
      <Grid><Button variant="outlined" onClick={toggleDrawer(true)} sx={{textTransform:'none', borderColor:'#00bfa5', color:'#000'}}>How it works</Button></Grid>
    </Grid>
            
       <Drawer open={open} anchor={"right"} onClose={toggleDrawer(false)} 
       
           sx={{ 
            '& .MuiDrawer-paper': { boxSizing: 'border-box',  padding:'20px 40px', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px' },
          }}
           >
        <><Button variant="text" onClick={toggleDrawer(false)}>Close</Button> 
      <DrawerContent/> 
        </>
      </Drawer>
    </>
  )
}

export default Header