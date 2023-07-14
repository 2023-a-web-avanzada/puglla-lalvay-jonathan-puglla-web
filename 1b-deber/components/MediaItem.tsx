"use client";

import Image from "next/image";
import React from "react";
import Song from "@/interfaces/song";

interface MediaItemProps {
    data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ data }) => {

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
                      alt={ "liked music cover" }
                      className={ "object-cover" }
                  />
              </div>
              <div className={
                  "flex flex-col gap-y-1 overflow-hidden"
              }>
                  <p className={ "text-white truncate" }>
                      { data?.title || "Title" }
                  </p>
                  <p className={ "text-neutral-400 text-sm truncate" }>
                      { data?.author || "By author" }
                  </p>
              </div>
          </div>
      </>
    );
};

export default MediaItem;