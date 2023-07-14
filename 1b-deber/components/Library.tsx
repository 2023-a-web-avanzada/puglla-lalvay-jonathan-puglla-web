"use client";

import {AiOutlinePlus} from "react-icons/ai";
import MediaItem from "@/components/MediaItem";
import Song from "@/interfaces/song";
import React, {useEffect, useState} from "react";
import {DailyMixConst} from "@/consts/dayly_mix_const";
import {FiArrowRight} from "react-icons/fi";
import {VscLibrary} from "react-icons/vsc";
import {BiSearch} from "react-icons/bi";
import {GoTriangleDown} from "react-icons/go";
import {RecentSongs} from "@/consts/recents_const";
import {Artists} from "@/consts/artist";
import Artist from "@/interfaces/artist";
import ArtistItem from "@/components/ArtistItem";

const Library = () => {
    const [isArtist, setIsArtist] = useState(false);
    const [songs, setSongs] = useState(DailyMixConst as Song[]);
    const [artists, setArtists] = useState(Artists as Artist[]);

    useEffect(() => {
        console.log("Songs changed");
    }, [songs]);

    useEffect(() => {
        console.log("Is Artist changed")
    }, [isArtist]);

    return(
        <>
            <div className={ "flex flex-col" }>
                <div className={ "flex items-center justify-between px-5 pt-4" }>
                    <div className={ "inline-flex items-center gap-x-2" }>
                        <VscLibrary className={ "text-neutral-400" } size={26}/>
                        <p className={ "text-neutral-400 font-medium text-md" }>
                            Your Library
                        </p>
                    </div>
                    <div className={ "flex items-end ml-1" }>
                        <div className={
                            `rounded-full
                             p-1 text-white 
                             bg-neutral-900 
                             flex 
                             items-center 
                             justify-center 
                             hover:bg-neutral-500/50 
                             hover:text-white 
                             cursor-pointer 
                             transition`
                        }>
                            <AiOutlinePlus
                                className={ "text-neutral-400 hover:text-white" }
                                size={20}
                            />
                        </div>
                        <div className={ "px-1" }></div>
                        <div className={
                            `rounded-full
                             p-1 text-white 
                             bg-neutral-900 
                             flex 
                             items-center 
                             justify-center 
                             hover:bg-neutral-500/50 
                             hover:text-white 
                             cursor-pointer 
                             transition`
                        }>
                            <FiArrowRight
                                className={ "text-neutral-400 hover:text-white" }
                                size={20}
                            />
                        </div>
                    </div>
                </div>
                <div className={ "flex items-center justify-between px-5 pt-4" }>
                    <div className={ "inline-flex items-center gap-x-2" }>
                        <div className={
                            `
                            rounded-full
                            p-1 
                            text-sm 
                            text-white 
                            bg-neutral-800 
                            flex items-center 
                            justify-center 
                            hover:bg-neutral-500/50 
                            hover:text-white 
                            cursor-pointer 
                            px-5 
                            font-light 
                            transition`
                        } onClick={() => {setSongs(RecentSongs); setIsArtist(false)}}>
                            <button onClick={() => {setSongs(RecentSongs); setIsArtist(false)}}>
                                Playlist
                            </button>
                        </div>
                        <div className={
                            `
                            rounded-full
                            p-1 
                            text-sm 
                            text-white 
                            bg-neutral-800 
                            flex items-center 
                            justify-center 
                            hover:bg-neutral-500/50 
                            hover:text-white 
                            cursor-pointer 
                            px-5 
                            font-light 
                            transition`
                        } onClick={() => {setArtists(Artists); setIsArtist(true)}}>
                            <button onClick={() => {setArtists(Artists); setIsArtist(true)}}>
                                Artists
                            </button>
                        </div>
                        <div className={
                            `
                            rounded-full
                            p-1 
                            text-sm 
                            text-white 
                            bg-neutral-800 
                            flex items-center 
                            justify-center 
                            hover:bg-neutral-500/50 
                            hover:text-white 
                            cursor-pointer 
                            px-5 
                            font-light 
                            transition`
                        } onClick={() => {setSongs([...DailyMixConst, ...RecentSongs]); setIsArtist(false)}}>
                            <button onClick={() =>{setSongs([...DailyMixConst, ...RecentSongs]); setIsArtist(false)}}>
                                All
                            </button>
                        </div>
                    </div>
                </div>
                <div className={ "flex items-center justify-between px-5 pt-4" }>
                    <div className={ "inline-flex items-center gap-x-2" }>
                        <BiSearch className={ "text-neutral-400" } size={20}/>
                    </div>
                    <div className={ "flex items-end ml-1" }>
                        <div className={
                            `
                            rounded-full 
                            p-1 
                            text-sm
                            text-white 
                            bg-transparent 
                            flex 
                            items-center 
                            justify-center 
                            cursor-pointer 
                            font-light 
                            transition
                            `
                        }>
                            Recent
                            <div className={ "px-1" }></div>
                            <GoTriangleDown size={18}/>
                        </div>
                    </div>
                </div>
                <div className={ "flex flex-col gap-y-2 mt-4 px-3" }>
                    <div>
                        {isArtist?
                            (
                                <div>
                                    {artists.map((item) => (
                                        <ArtistItem
                                            key={ item.author }
                                            data={ item }
                                        />
                                    ))}
                                </div>
                            )
                            :
                            (

                            <div>
                                {songs.map((item) => (
                                    <MediaItem
                                        key={ item.title }
                                        data={ item }
                                    />
                                ))}
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Library;