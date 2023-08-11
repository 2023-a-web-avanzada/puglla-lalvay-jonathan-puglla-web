'use client';

import React from 'react';
import {useRouter} from "next/navigation";

interface BrandActionsProps {
    brandId: number;
    onClose: () => void;
    onDelete: (brandId: number) => void;
}

const BrandActions: React.FC<BrandActionsProps> = ({ brandId, onClose, onDelete }) => {
    const router = useRouter();
    const handleEdit = () => {
        router.push(`./brand/${brandId}`);
    };

    const handleDelete = () => {
        onDelete(brandId);
        onClose();
    };

    const handleListSmartphones = () => {
        // Implement your List Smartphones action here
        console.log(`Listing smartphones for brand with ID: ${brandId}`);
    };

    return (
        <div className="fixed inset-0 flex w-full justify-center items-center rounded-xl backdrop-blur-2xl transition">
            <div className="bg-white p-12 grid grid-cols-1 rounded-lg text-center">
                <button className={`
                            mt-4
                            text-md 
                            w-full
                            px-4
                            text-white
                            bg-black 
                            py-2 
                            rounded-xl 
                            shadow-lg 
                            hover:text-black
                            hover:bg-white
                        `}
                        onClick={handleListSmartphones}
                >
                    Smartphones
                </button>
                <button className={`
                            mt-4
                            text-md 
                            w-full
                            px-4
                            text-white
                            bg-black 
                            py-2 
                            rounded-xl 
                            shadow-lg 
                            hover:text-black
                            hover:bg-white
                        `}
                        onClick={handleEdit}
                >
                    Edit Brand
                </button>
                <button className={`
                            mt-4
                            text-md 
                            w-full
                            px-4
                            text-white
                            bg-black 
                            py-2 
                            rounded-xl 
                            shadow-lg 
                            hover:text-black
                            hover:bg-white
                        `}
                        onClick={handleDelete}
                >
                    Delete Brand
                </button>
                <button className={`
                            mt-4
                            text-md 
                            w-full
                            px-4
                            text-white
                            bg-black 
                            py-2 
                            rounded-xl 
                            shadow-lg 
                            hover:text-black
                            hover:bg-white
                        `}
                        onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BrandActions;
