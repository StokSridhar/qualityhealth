"use client"
 
import styles from "./page.module.css";  
 
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography'; 
import FormLayout from "./components/Form";
import Image from 'next/image' 
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import React from "react";
import { colors } from "@mui/material";
import DrawerContent from "./components/DrawerContent";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Home() {
  const [open, setOpen] = React.useState(false);
 const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
  };
  
  function toggleOffers() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <main className={styles.main}> 
      <Grid container component="main" sx={{ height: '100vh' }}> 
        <Grid item xs={false} sm={4} md={6}  >
          <div className={styles.qulitycareleft}> 
           <Image alt="Wecare - Claim $25 in Vacation Spending" src="/bg.png" width={600} height={8000} style={{objectFit: "cover", borderRadius:'20px'}} priority  />
          </div>  
        </Grid> 
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square> 
      <Grid container spacing={2} sx={{padding:'25px 25px 0 25px'}}>
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
          <Box 
            sx={{
              width:'50%',
              my: 0,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              overflowY:'auto'
            }}>
            <Typography component="h1" variant="h5" sx={{color:'#006658', fontFamily:'none', fontSize:'48px', mb:'20px'}}>
             Sign up
            </Typography>  
            <FormLayout/> 
            <Button sx={{textTransform:'none', background:'#2B3649', my:2, padding:'8px', fontSize:'16px'}} variant="contained" disableElevation fullWidth><MailOutlineIcon sx={{marginRight:'10px'}}/> Continue with email</Button>
            
           
            <p style={{fontSize:'14px', verticalAlign:'middle'}}>By signing up, I agree to the  <Link href="#" onClick={toggleOffers} style={{color:'#006658'}}>Offer Terms <ExpandMoreIcon style={{fontSize:'16px'}}/></Link>
            </p>
             {isOpen && <>
              <div className="termsandconditions" style={{fontSize:'10px', textAlign:'center', paddingTop:'10px'}}>
              <p>
                I agree to the Offer Terms and understand I am creating a Sharecare account. I agree to the Sharecare Privacy Policy, Terms, and, if applicable to me, the Privacy Notice for California Residents. I consent to Sharecare's processing of any health information I may provide, for the purposes listed in the Privacy Policy. I agree to receive emails, offers, alerts, and other notices. I understand that I can opt-out of marketing communications at any time.
              </p>
            </div>
            </>}  
          </Box>
        </Grid>
      </Grid> 
     </main>
  );
}
