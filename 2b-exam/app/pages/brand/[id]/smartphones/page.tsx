'use client';

import {useParams} from "next/navigation";
import Header from "@/app/components/template/Header";
import {getSmartphonesByBrandId} from "@/api/smartphoneHandler";
import AddSmartphone from "@/app/components/smartphone/AddSmartphone";
import SmartphoneList from "@/app/components/smartphone/SmartphoneList";
import React from "react";

const SmartphonesPage = async () => {
    const {id} = useParams();
    const smartphones = await getSmartphonesByBrandId(id as string);

    return(
        <>
            <Header/>

            <div className="relative h-30 w-120">
                <div className="absolute z-40 right-0">
                    <AddSmartphone brandId={id as string}/>
                </div>
            </div>

            <div className="pt-10">
                <SmartphoneList smartphones={smartphones}/>
            </div>
        </>
    );
}

export default SmartphonesPage;