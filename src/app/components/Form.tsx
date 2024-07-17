"use client" 

import Box from '@mui/material/Box'; 
import SelectDropdown from "./SelectDropdown"; 
import InputBox from "./Input"
import { ChangeEvent, MouseEvent, useState } from "react"; 
import BadgeIcon from '@mui/icons-material/Badge'; 
import { Error } from '../utils/Index';
import Datepicker from './Datepicker';
import EditIcon from '@mui/icons-material/EditOutlined';
 
const Form = () => {
const [firstName, setFirstname] = useState<string>(""); 
const [nameError, setNameError] = useState(false);
const [nameErrorDesc, setNameErrorDesc] = useState("");
const [streetAddress, setStreetAddress] = useState<string>(""); 
const [addressError, setaddressError] = useState(false);
const [addErrorDesc, setAddErrorDesc] = useState("");

const [mobileNumber, setMobileNumber] = useState<string>(""); 
const [mobileError, setMobileError] = useState(false);
const [mobileErrorDesc, setMobileErrorDesc] = useState(""); 


     const handleFirstnameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value)
    }
    const handleNameChange = (e:any) => {
    setFirstname(e.target.value);
    if (e.target.value === '') {
      setNameError(true);
      setNameErrorDesc(Error.Default)
    } else if(e.target.value.length <= 5)  {
      setNameError(true);
      setNameErrorDesc(Error.InvalidName)
    } else {
        setNameError(false)
    }
  };
  const handleAddressCheck = (e:any) => {
    setStreetAddress(e.target.value);
    if (e.target.value === '') {
      setaddressError(true);
      setAddErrorDesc(Error.Default)
    } else if(e.target.value.length <= 5)  {
      setaddressError(true);
      setAddErrorDesc(Error.InvalidAddress)
    } else {
        setaddressError(false)
    }
     
  }
  const handlemobilechange = (e:any) => {  
    const numericValue = e.target.value.replace(/[^0-9]/g, "");  
    if(numericValue.length !== 10){
      setMobileError(true)
      setMobileErrorDesc(Error.PhoneLengthError)
    } else (
      setMobileError(false)
    )
    setMobileNumber(numericValue); 
  } 
 
    
  return (
    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 formwrapper">
 <Box component="form"  sx={{ mt: 1 }} >
    <div className="registerinfo">
        <BadgeIcon/> Your information 
    </div> 
                 
              <InputBox 
                label={nameError ? nameErrorDesc : "Full name"} 
                name="First Name" 
                type="text" 
                value={firstName}
                onchange={handleNameChange}  
                  error={nameError}  
                Icon={ 
                <EditIcon sx={ nameError ? { fill: '#ef4444' } : { fill: "#1c2a46" }}/>}
              />
              <InputBox 
              label={addressError ? addErrorDesc : "Street address (e.g. '1 Elm Way')"}  
                name="Street address" 
                type="text" 
                 value={streetAddress}
                onchange={handleAddressCheck} 
                error={addressError} 
                Icon={<EditIcon sx={ addressError ? { fill: '#ef4444' } : { fill: "#1c2a46" }}/>}   
              />
                <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 0 },
      }}
    >
          <InputBox 
            label="City" 
            name="City" 
            type="text" 
            onchange={handleFirstnameChange} 
            error={false}
            disabled
            Icon={<EditIcon sx={{fill:'#1c2a46'}}/>}
            style={{ borderRight:'1px solid #D1D5DB' }}
          />
          <InputBox 
            label="State" 
            name="state" 
            type="text" 
            onchange={handleFirstnameChange} 
            error={false}
            disabled
           Icon={<EditIcon sx={{fill:'#1c2a46'}}/>}
          /> 
      </Box>       
      <InputBox 
       label={mobileError ? mobileErrorDesc : "Mobile number"}  
        name="Mobile number" 
        type="text"  
        value={mobileNumber}
        onchange={handlemobilechange}  
          error={mobileError} 
        placeholder={"(000) - 000 0000"}
        Icon={ 
        <EditIcon sx={ mobileError ? { fill: '#ef4444' } : { fill: "#1c2a46" }}/>}
      />
      <Datepicker/>
      <SelectDropdown/>  
            </Box>
    </div>
    
  )
}

export default Form