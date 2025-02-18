import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    onClick?: () => void;
    style: "primary" | "secondary";
}
 
const Button: React.FunctionComponent<ButtonProps> = ({ children, isDisabled, onClick, style }) => {
    if (isDisabled) {
        return (
            <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded" disabled>
                {children}
            </button>
        );
    }

    let colour = style === "primary" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700";
    return ( 
        <button className={colour + " text-white font-bold py-2 px-4 rounded"} onClick={onClick}>
            {children}
        </button>
     );
}
 
export default Button;
