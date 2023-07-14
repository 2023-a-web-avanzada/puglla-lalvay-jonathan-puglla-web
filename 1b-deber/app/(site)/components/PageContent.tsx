"use client";

import React, {useMemo, useState} from "react";
import SongItem from "@/components/SongItem";
import {usePathname} from "next/navigation";
import {RecentSongs} from "@/consts/recents_const";
import Song from "@/interfaces/song";
import {DailyMixConst} from "@/consts/dayly_mix_const";

const PageContent = () => {
    const pathname = usePathname();

    const [recentSongs, setRecentSongs] = useState(RecentSongs as Song[]);
    const [dailyMixes, setDailyMixes] = useState(DailyMixConst as Song[]);

    return (
        <>
            <div className={ "mt-2 mb-7 px-6" }>
                <div className={ "flex justify-between items-center" }>
                    <h1 className={ "text-white text-2xl font-semibold" }>
                        Made for Jonathan
                    </h1>
                </div>
                <div className={
                    `
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                2xl:grid-cols-8 
                gap-4 
                mt-4
                `
                }>
                    {dailyMixes.map((item) => (
                        <SongItem key={ item.title } {...item}/>
                    ))}
                </div>
            </div>

            <div className={ "mt-2 mb-7 px-6" }>
                <div className={ "flex justify-between items-center" }>
                    <h1 className={ "text-white text-2xl font-semibold" }>
                        Recently Played
                    </h1>
                </div>
                <div className={
                    `
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                2xl:grid-cols-8 
                gap-4 
                mt-4
                `
                }>
                    {recentSongs.map((item) => (
                        <SongItem key={ item.title } {...item}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PageContent;