'use client';

import {SiBrandfolder} from "react-icons/si";
import React from "react";
import {useRouter} from "next/navigation";

const Header = () => {
    const router = useRouter();

    const goHomepage = () => {
        router.push(`/`)
    }

    return (
        <>
            <nav
                className={`
                    flex 
                    fixed 
                    items-center 
                    justify-between 
                    flex-wrap 
                    p-6 border-b 
                    border-gray-100 
                    backdrop-blur-sm 
                    bg-white/90 
                    w-full
                    z-30
                    top-0 
                    left-0
                    xl:fixed 
                    xl:w-full 
                    xl:top-0 
                    xl:left-0
                    xl:z-30
                `}>
                <div onClick={goHomepage} className="flex cursor-pointer items-center flex-shrink-0 text-black mr-6">
                    <SiBrandfolder onClick={goHomepage} className="cursor-pointer"/>
                    <span className="font-semibold text-xl ml-2 tracking-tight">
                        Websockets
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Header;