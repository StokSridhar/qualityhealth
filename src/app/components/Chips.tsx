import { FC } from 'react'
import { ChipsProps } from '../utils/Index';
import Chip from '@mui/material/Chip'; 

const Chips:FC<ChipsProps> = ({
    label,
    icon
}) => { 
    return ( 
  <Chip icon={icon } label={label} sx={{color:'#006658', background:'#e0f7fa', textTransform:'uppercase', marginTop:'64px', marginBottom:'24px'}}  /> 
     )
}
 
export default Chips