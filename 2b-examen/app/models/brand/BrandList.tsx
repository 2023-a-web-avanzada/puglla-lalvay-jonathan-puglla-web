'use client';

import React, {useState} from 'react';
import {Brand} from "@/app/types/Brand";
import BrandActions from "@/app/models/brand/BrandActions";


interface BrandListProps {
    brands: Brand[];
    onDelete: (brandId: number) => void;
}

const BrandList: React.FC<BrandListProps> = ({ brands, onDelete}) => {
    const [showModals, setShowModals] = useState<boolean[]>(
        brands.map(() => false)
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

    return (
        <>
            <div className="bg-gradient-to-tr from-0% to-25% flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {brands?.map((brand, index) => (
                        <div key={brand.id}>
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
                                <h3 className="mb-3 text-xl font-bold text-black">{brand.name}</h3>
                                <div className="relative">
                                    <img className="rounded-xl object-cover h-48 w-96"
                                         src={brand.imageURL}
                                         alt="Colors"/>
                                    <p className={`
                                            absolute 
                                            top-0 
                                            backdrop-blur-sm 
                                            bg-white/30 
                                            text-white 
                                            backdrop-brightness-100 
                                            md:backdrop-filter-none 
                                            font-semibold
                                            py-1 
                                            px-3 
                                            rounded-br-lg 
                                            rounded-tl-lg 
                                            border-black
                                        `}
                                    >
                                        {brand.active?"Active":"Inactive"}
                                    </p>
                                </div>
                                <div className="my-4">
                                    <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 text-black mb-1.5" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </span>
                                        <p><strong>Year:</strong> {brand.established}</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 text-black mb-1.5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                        >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                        </svg>
                                    </span>
                                        <p><strong>Country:</strong> {brand.country}</p>
                                    </div>
                                    <button
                                        className={`
                                            mt-4 
                                            text-xl 
                                            w-full 
                                            text-white
                                            bg-black 
                                            py-2 
                                            rounded-xl 
                                            shadow-lg 
                                            hover:text-black
                                            hover:bg-white
                                        `}
                                        onClick={() => handleOpenModal(index)}
                                    >
                                        Actions
                                    </button>
                                    {showModals[index] && (
                                        <BrandActions
                                            brandId={brand.id}
                                            onClose={() => handleCloseModal(index)}
                                            onDelete={onDelete}
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
};

export default BrandList;
