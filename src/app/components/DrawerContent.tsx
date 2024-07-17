import Chip from '@mui/material/Chip';
import Step1Icon from '@mui/icons-material/FavoriteBorder';
import StepFill from '@mui/icons-material/FavoriteOutlined';
import Chips from './Chips';

const DrawerContent = () => {
  return (
    <div>

        <h5 style={{textTransform:'uppercase'}}> HOW IT WORKS</h5> 
<h2 style={{fontSize:'36px', color:'#006658', margin:'20px 0'}}>Joining is simple</h2>
<p>By simply registering and answering a few questions <br/>, you will unlock personalized health experience to start your health journey.</p>
     <Chips icon={<Step1Icon sx={{ "&&": { fill:'#006658',  fontSize:'14px' }}} />} label="Step 1"></Chips> 
<h3 style={{color:'#006658', fontSize:'1.5rem'}}>Register an account</h3>
<Chips icon={<StepFill sx={{ "&&": {  fontSize:'14px', fill:'#006658'  }}}/>} label="Step 2"></Chips>  
<h3 style={{color:'#006658', fontSize:'1.5rem'}}>Tell us about your lifestyle and health</h3>
 <Chips icon={<StepFill sx={{ "&&": {fontSize:'14px', fill:'#006658' }}} />} label="Step 3"></Chips>  
<h3 style={{color:'#006658', fontSize:'1.5rem'}}>Receive Sharecare personalized health experience</h3>
    </div>
  )
}

export default DrawerContent