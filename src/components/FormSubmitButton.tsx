
"use client"

import { useFormStatus } from "react-dom";

import { ComponentProps } from "react";

type formSubmitButtonProps ={
children :React.ReactNode,
className : string,

} & ComponentProps<"button">
const FormSubmitButton = ({className ,children,...props}:formSubmitButtonProps) => {

  const {pending}= useFormStatus()
  return (
    <button 
    {...props}
    
    className={`btn btn-primary ${className}`} type="submit"
    
  disabled={pending}>

    {pending && <span className="loading loading-spinner" />}
   {children}
    </button>
  )
};

export default FormSubmitButton
