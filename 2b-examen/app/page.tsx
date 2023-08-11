'use client';

import React from "react";
import {useRouter} from "next/navigation";
import {TbBrandSuperhuman} from "react-icons/tb";

export default function Home() {
  const router = useRouter();

  return(
      <>
        <div className={"flex items-center justify-center h-screen"}>
          <button
              className={
                "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              }
              type="button"
              onClick={
                () => router.push('/pages/brand')
              }>
            <TbBrandSuperhuman className={ "ml-0.5" } size={20}/>
            <span>List Brands</span>
          </button>
        </div>
      </>
  )
}
