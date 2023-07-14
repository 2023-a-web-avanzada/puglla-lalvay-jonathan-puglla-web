"use client";
import Image from "next/image";
import React from "react";
import PlayButton from "@/components/PlayButton";

interface SongItemProps {
    author: string;
    title: string;
    song_path: string;
    image_path: string;
}

const SongItem:React.FC<SongItemProps> = (
    {author, title, song_path, image_path}
) => {
    return (
        <>
            <div className={
                `
                relative
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-400/5
                cursor-pointer
                hover:bg-neutral-400/10
                transition
                p-3
                `
            }>
                <div className={
                    `
                    relative
                    aspect-square
                    w-full
                    h-full
                    rounded-md
                    overflow-hidden
                    `
                }>
                    <Image
                        className={ "object-cover" }
                        src={ image_path || "/images/liked.png"}
                        fill
                        alt={ "song cover" }/>
                </div>
                <div className={ "flex flex-col items-start w-full pt-4 gap-y-1" }>
                    <p className={ "font-semibold truncate w-full" }>
                        { title }
                    </p>
                    <p className={
                        `
                        text-neutral-400
                        text-sm
                        pb-4
                        w-full
                        truncate
                        `
                    }>
                        By { author }
                    </p>
                </div>
                <div className={ "absolute bottom-24 right-5" }>
                    <PlayButton/>
                </div>
            </div>
        </>
    );
};

export default SongItem;