import { ChangeEvent, MouseEvent, KeyboardEvent } from "react"

export interface InputProps {
    label: string
    name: string
    type: 'text' | 'number' | 'password' | 'date'
    placeholder?: any
    value?: any
    error?: boolean,
    Icon?: any,
    helperText?:string,
    disabled?:boolean,
    onKeyUp?: (e:KeyboardEvent<HTMLInputElement>) => void
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
}


export interface ButtonProps {
    type: 'submit' | 'reset'
    name: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean,
    startIcon?: any,
    endIcon?:any
}

export interface ChipsProps {
    label: string
    icon: any
}

export enum Error {
    Default = 'Required field',
    InvalidAddress = 'Invalid Address. Please select from suggestions',
    InvalidName = 'Add both first and last name',
    InvalidDOB = 'Invalid date of birth.', 
}
 