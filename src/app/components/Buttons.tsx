import { FC } from "react";
import { ButtonProps } from "../utils/Index";
import Button from '@mui/material/Button';

const Buttons: FC<ButtonProps> = ({
type,
name,
onClick,
disabled,
startIcon,
endIcon
}) => {
    return (
        <>
        <Button 
            fullWidth
            variant="contained"
            type={type}  
            disableElevation
            onClick={onClick} 
            startIcon={startIcon}
            endIcon={endIcon}
            disabled={disabled}>{name}</Button> 
        </>  
    )
}
export default Buttons