import React from "react";

interface Props {
  placeholder: string;
  className?: string
}

const Input = ({placeholder, className}: Props) => {
  return (
    <input
      className={`px-4 py-1.5 focus:ring-primary focus:ring focus:border-none outline-1 focus:outline-primary outline-gray-300 border border-gray-300 rounded-lg w-full placeholder:text-sm ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
