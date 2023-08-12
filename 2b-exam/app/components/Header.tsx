'use client';

import {SiBrandfolder} from "react-icons/si";
import React from "react";

const Header = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-black p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <SiBrandfolder/>
                    <span className="font-semibold text-xl ml-2 tracking-tight">
                        Brands and Smartphones
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Header;