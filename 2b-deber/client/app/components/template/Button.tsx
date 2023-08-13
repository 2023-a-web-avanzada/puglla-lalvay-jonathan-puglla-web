import {BiSolidAddToQueue} from "react-icons/bi";
import React from "react";

interface ButtonProps {
    socket: any;
}
const Button: React.FC<ButtonProps> = ({socket}) => {
    return(
        <>
            <div className="px-16 pt-4">
                <button
                    onClick={() => socket.emit('clear')}
                    className="flex bg-white px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black backdrop-blur-2xl focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center mr-2 mb-2">
                    <BiSolidAddToQueue size={20} className="mr-1"/> Clear canvas
                </button>
            </div>
        </>
    );
}

export default Button;