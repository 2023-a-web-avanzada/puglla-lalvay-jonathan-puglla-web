'use client';

import React from 'react';
import BrandList from "@/app/models/brand/BrandList";
import {Brand} from "@/app/types/Brand";
import AddBrand from '@/app/components/AddBrand';
import Header from "@/app/components/Header";

interface BrandsPageProps {
    brands: Brand[];
}

const BrandsPage: React.FC<BrandsPageProps> = ({brands}) => {

    return (
        <>
            <Header/>

            <div className="px-16 mb-0">
                <AddBrand/>
            </div>

            <div>
                <BrandList brands={brands} />
            </div>
        </>
    );
};

export default BrandsPage;