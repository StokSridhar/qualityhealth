"use client" 

import Box from '@mui/material/Box'; 
import SelectDropdown from "./SelectDropdown";
import EditIcon from '@mui/icons-material/Edit';   
import InputBox from "./Input"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Buttons from "./Buttons";
import BadgeIcon from '@mui/icons-material/Badge'; 
import { Error } from '../utils/Index';
import Datepicker from './Datepicker';
 


const Form = () => {
//     const [inputValues, setInputValue] = useState<any>({
//     firstName: "",
//     streetAddress: "",
//     mobileNumber: "",
//     dateofBirth: "",
//     genderType: "",
//   });

//   const [validation, setValidation] = useState({
//      firstName: "",
//     streetAddress: "",
//     mobileNumber: "",
//     dateofBirth: "",
//     genderType: "",
//   });
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
    } else if(e.target.value >= 3)  {
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
    } else if(e.target.value >= 3)  {
      setaddressError(true);
      setAddErrorDesc(Error.InvalidAddress)
    } else {
        setaddressError(false)
    }
    //Invalid Address. Please select from suggestions.
  }
  const handlemobilechange = (e:any) => {
    console.log(e.target.value)
    setMobileNumber(e.target.value)
  }
   
//   function formatPhoneNumber2(phoneNumberString:any) {
//   var cleaned = ('' + phoneNumberString).replace(/\\D/g, '');
//   var match = cleaned.match(/^(\\d{3})(\\d{3})(\\d{4})$/);
//   if (match) {
//     return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//   }
//   return null;
// }
    const handlebtnClick = (e:MouseEvent<HTMLButtonElement>) => {  
        alert(JSON.stringify(firstName ))
        console.log("Button Clicked")
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
                Icon={<EditIcon/>}
              />
              <InputBox 
              label={addressError ? addErrorDesc : "Street address (e.g. '1 Elm Way')"}  
                name="Street address" 
                type="text" 
                 value={streetAddress}
                onchange={handleAddressCheck} 
                error={addressError}   
                Icon={<EditIcon/>}
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
                Icon={<EditIcon/>}
              />
               <InputBox 
                label="State" 
                name="state" 
                type="text" 
                onchange={handleFirstnameChange} 
                error={false}
                disabled
                Icon={<EditIcon/>}
              />

    </Box>
               
              <InputBox 
                label="Mobile number" 
                name="Mobile number" 
                type="text"  
                value={mobileNumber}
                onchange={handlemobilechange} 
                
                error={false} 
                placeholder={"(000) - 000 0000"}
                Icon={<EditIcon/>}
              /> 
            
              <Datepicker/>
 <SelectDropdown/> 
             
            </Box>
    </div>
    
  )
}

export default Form