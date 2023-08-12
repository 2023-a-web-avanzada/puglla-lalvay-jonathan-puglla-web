'use client';

import React, {useEffect, useState} from 'react';
import BrandList from "@/app/models/brand/BrandList";
import {getAllBrands} from "@/api/api";
import {Brand} from "@/app/types/Brand";
import {SiBrandfolder} from "react-icons/si";
import AddBrand from '@/app/components/AddBrand';

const BrandsPage = () => {
    const [brands, setBrands] = useState([] as Brand[]);

    useEffect(() => {
        getAllBrands()
            .then(data => {
                setBrands(data);
            })
            .catch(error => {
                console.error('Error fetching brands:', error);
            });
    }, []);

    const handleDeleteBrand = (brandId: number) => {
        brands.filter((brand) => brand.id !== brandId);
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-black p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <SiBrandfolder/>
                    <span className="font-semibold text-xl ml-2 tracking-tight">Brands</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            </nav>
            <div className="px-16 mb-0">
                <AddBrand/>
            </div>

            <div>
                <BrandList brands={brands} onDelete={handleDeleteBrand} />
            </div>
        </>
    );
};

export default BrandsPage;