"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "@/components/Button";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import Image from "next/image";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {

    const myButtonStyle = `
        bg-transparent 
        text-neutral-400 
        tracking-widest
        font-medium
        text-base
        hover:text-white 
        hover:font-extrabold 
        px-1
        overflow-x-hidden
        transition
    `;

    return(
        <>
            { /* h-fit bg-gradient-to-b from-emerald-800 p-4 */ }
            { /* h-fit bg- bg-neutral-900 p-2 */ }
            <div className={ twMerge("h-fit bg-gradient-to-b from-neutral-100/20 p-6", className) }>
                { /* w-full mb-4 flex items-center justify-between */ }
                <div className={ "w-full mb-4 flex items-center justify-between" }>
                    <div className={ "hidden md:flex gap-x-2 items-center" }>
                        <button
                            className={
                                "rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                            }
                        >
                            <RxCaretLeft className={ "text-white" } size={35}/>
                        </button>
                        <button
                            className={
                                "rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                            }
                        >
                            <RxCaretRight className={ "text-white" } size={35}/>
                        </button>
                    </div>
                    <div className={ "flex md:hidden gap-x-2 items-center" }>
                        <button className={
                            "rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                        }>
                            <HiHome className={ "text-black" } size={20}/>
                        </button>
                        <button className={
                            "rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                        }>
                            <BiSearch className={ "text-black" } size={20}/>
                        </button>
                    </div>
                    <div className={ "flex justify-between items-center gap-x-4" }>
                        <>
                            <Button className={ "bg-white px-6 py-1" }>
                                Explore premium
                            </Button>
                            <Button className={
                                "flex items-center justify-between bg-neutral-900/100 text-white px-6 py-1"
                            }>
                                <MdOutlineDownloadForOffline className={ "mr-1" } size={ 20 }/>
                                Install App
                            </Button>
                            <button
                                className={
                                    `
                                    rounded-full
                                    py-1 
                                    px-1 
                                    bg-black 
                                    flex 
                                    items-center 
                                    justify-center 
                                    hover:opacity-75 
                                    transition
                                    `
                                }
                            >
                                <div className={ "relative min-h-[30px] min-w-[30px] rounded-full" }>
                                    <Image
                                        className={ "object-cover rounded-full" }
                                        fill
                                        src={ "/images/profile.jpg" }
                                        alt={ "Liked image" }
                                    />
                                </div>
                            </button>
                        </>
                    </div>
                </div>
                { children }
            </div>
        </>
    );
}

export default Header;