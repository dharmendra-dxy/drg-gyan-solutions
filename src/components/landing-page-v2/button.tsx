import React from 'react'

type ButtonType = "primary" | "secondary";

interface Props {
  text: string;
  type: ButtonType;
 icon?: React.ComponentType<{ className?: string }>;
 className?: string;
 modalText:string
 handleOpen: (text?: string) => void;
}

const Button = ({text, type, icon:Icon, className, handleOpen, modalText}: Props) => {
  return (
   <button
    onClick={()=>handleOpen(modalText)}
    className={`px-6 py-2 rounded-full ${type==="primary" ? "bg-blue-500 text-white": "border border-blue-500 text-blue-500"} flex items-center gap-2 text-sm md:text-base hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
   >
    {text} {Icon && <Icon className="size-5"/>}
   </button>
  )
}

export default Button