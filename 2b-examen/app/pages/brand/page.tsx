'use client';

import React, {useState} from 'react';
import { Brand } from '../../types/Brand';
import myBrands from "@/app/models/brand/brands.json";
import BrandList from "@/app/models/brand/BrandList";

interface myProps {
    id: string;
}
const BrandsPage: React.FC<myProps> = ({id}) => {
    const [brands, setBrands] = useState<Brand[]>(myBrands);

    const handleDeleteBrand = (brandId: number) => {
        const updatedBrands = brands.filter(brand => brand.id !== brandId);
        setBrands(updatedBrands);
    };

    return (
        <div>
            <BrandList brands={brands} onDelete={handleDeleteBrand} />
        </div>
    );
};

export default BrandsPage;