'use client';

import React from 'react';
import BrandList from "@/app/models/brand/BrandList";
import {getAllBrands} from "@/api/api";
import {Brand} from "@/app/types/Brand";

interface BrandsPageProps {
    brands: Brand[];
}

const BrandsPage = async () => {
    const myBrands = await getAllBrands();
    console.log(myBrands);

    const handleDeleteBrand = (brandId: number) => {
        myBrands.filter((brand) => brand.id !== brandId);
    }

    return (
        <div>
            <BrandList brands={myBrands} onDelete={handleDeleteBrand} />
        </div>
    );
};

export default BrandsPage;