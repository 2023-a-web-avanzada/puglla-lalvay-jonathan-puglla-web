"use client";

import Image from "next/image";
import React from "react";
import Artist from "@/interfaces/artist";

interface ArtisItemProps {
    data: Artist;
}

const ArtistItem: React.FC<ArtisItemProps> = ({ data }) => {

    return(
        <>
            <div className={
                `
              flex
              items-center
              gap-x-3
              cursor-pointer
              hover:bg-neutral-800/50
              w-full
              p-2
              rounded-md
              `
            }>
                <div className={
                    `
                  relative
                  rounded-md
                  min-h-[48px]
                  min-w-[48px]
                  overflow-hidden
                  `
                }>
                    <Image
                        fill
                        src={ data?.image_path || "/images/liked.png"}
                        alt={ "artist image" }
                        className={ "object-cover" }
                    />
                </div>
                <div className={
                    "flex flex-col gap-y-1 overflow-hidden"
                }>
                    <p className={ "text-white truncate" }>
                        { data?.author || "Author name" }
                    </p>
                    <p className={ "text-neutral-400 text-sm truncate" }>
                        { data?.title || "Description" }
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArtistItem;