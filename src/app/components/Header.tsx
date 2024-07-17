import React from 'react';
import Grid from '@mui/material/Grid'; 
import Image from 'next/image' 
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import DrawerContent from "./DrawerContent";

const Header = () => {
    const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
  };
  
  return (
    <>
    
    <Grid container  xs={12} spacing={2} sx={{padding:'25px 25px 0 25px'}}>
        <Grid item xs={8} sx={{color:'#00bfa5'}}>
        <Image src="/favicon.ico" width={30} height={30} alt="QualityHealth Logo" style={{verticalAlign:'middle'}}/> QualityHealth
        </Grid>
        <Grid item xs={4} justifyContent="flex-end">
        <Button variant="outlined" onClick={toggleDrawer(true)} sx={{textTransform:'none', borderColor:'#00bfa5', color:'#000'}}>How it works</Button>
        </Grid>
      </Grid>
       <Drawer open={open} anchor={"right"} onClose={toggleDrawer(false)} 
           sx={{
            display: { xs: {width:'100%'} , sm: {width:'100%'}  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '35%', padding:'20px 40px', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px' },
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