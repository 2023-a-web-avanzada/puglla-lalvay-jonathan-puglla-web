'use client';

import React, {useState} from "react";
import {Smartphone} from "@/app/types/Smartphone";
import SmartphoneActions from "@/app/components/smartphone/SmartphoneActions";
import {HiColorSwatch} from "react-icons/hi";

interface SmartphoneListParams {
    smartphones: Smartphone[];
}
const SmartphoneList:React.FC<SmartphoneListParams> = ({smartphones}) => {
    const [showModals, setShowModals] = useState<boolean[]>(
        smartphones.map(() => false)
    );

    const handleOpenModal = (index: number) => {
        const updatedModals = [...showModals];
        updatedModals[index] = true;
        setShowModals(updatedModals);
    };

    const handleCloseModal = (index: number) => {
        const updatedModals = [...showModals];
        updatedModals[index] = false;
        setShowModals(updatedModals);
    };

    return(
        <>
            <div className="flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {smartphones?.map((smartphone, index) => (
                        <div key={smartphone.id}>
                            <div className={`
                                    max-w-sm 
                                    bg-white 
                                    px-6 
                                    pt-6 
                                    pb-2 
                                    rounded-xl 
                                    shadow-2xl 
                                    transform 
                                    hover:scale-105 
                                    transition 
                                    duration-500
                                `}
                            >
                                <h3 className="mb-3 text-xl font-extrabold text-black">{smartphone.name}</h3>
                                <div className="relative">
                                    <img className="rounded-xl shadow-md object-cover h-48 w-96"
                                         src={smartphone.imageURL}
                                         alt="Smartphone reference image"/>
                                    <p className={`
                                            absolute 
                                            top-0 
                                            backdrop-blur-sm
                                            bg-amber-300 
                                            text-black 
                                            font-semibold
                                            py-1 
                                            px-3 
                                            rounded-br-lg 
                                            rounded-tl-lg 
                                            border-black
                                        `}
                                    >
                                        US$ {smartphone.price}
                                    </p>
                                </div>
                                <div className="my-4">
                                    <div className="flex space-x-1 items-center">
                                    <span>
                                        <HiColorSwatch size={20} className="text-black mb-1.5"/>
                                    </span>
                                        <p className="text-gray-600"><strong className="text-black">Color:</strong> {smartphone.color}</p>
                                    </div>
                                    <button
                                        className={`
                                            mt-4 
                                            text-xl 
                                            w-full 
                                            bg-black
                                            py-2 
                                            shadow-lg 
                                            border 
                                            rounded-xl 
                                            text-white 
                                            border-black 
                                            hover:text-black 
                                            hover:bg-white 
                                            backdrop-blur
                                        `}
                                        onClick={() => handleOpenModal(index)}
                                    >
                                        Actions
                                    </button>
                                    {showModals[index] && (
                                        <SmartphoneActions
                                            smartphone={smartphone}
                                            onClose={() => handleCloseModal(index)}
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SmartphoneList;