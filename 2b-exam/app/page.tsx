'use client';

import React from "react";
import BrandsPage from "@/app/pages/brand/page";
import {getAllBrands} from "@/api/api";

export default async function Home() {
    const brands = await getAllBrands();
    return(
        <>
            <BrandsPage brands={brands}/>
        </>
    )
}
