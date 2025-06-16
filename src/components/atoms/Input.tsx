import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
    return <input {...props} className="p-2 border rounded w-full"/>
};