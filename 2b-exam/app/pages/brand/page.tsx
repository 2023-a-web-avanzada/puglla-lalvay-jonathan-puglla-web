'use client';

import React from 'react';
import BrandList from "@/app/components/brand/BrandList";
import {Brand} from "@/app/types/Brand";
import AddBrand from '@/app/components/brand/AddBrand';
import Header from "@/app/components/template/Header";

interface BrandsPageProps {
    brands: Brand[];
}

const BrandsPage: React.FC<BrandsPageProps> = ({brands}) => {

    return (
        <>
            <Header/>

            <div className="relative h-30 w-120">
                <div className="absolute z-40 right-0">
                    <AddBrand/>
                </div>
            </div>

            <div className="pt-10">
                <BrandList brands={brands} />
            </div>
        </>
    );
};

export default BrandsPage;