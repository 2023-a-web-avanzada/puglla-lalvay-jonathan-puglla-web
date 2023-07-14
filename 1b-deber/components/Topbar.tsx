"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import ListItem from "@/components/ListItem";

const Topbar = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            image: "/images/2010-mix.jpg",
            name: "2010s Mix"
        },
        {
            image: "/images/liked.png",
            name: "Liked Songs"
        },
        {
            image: "/images/release-radar.jpg",
            name: "Release Radar"
        },
        {
            image: "/images/jvke.jpg",
            name: "JVKE Mix"
        },
        {
            image: "/images/harrys-house.jpg",
            name: "Harry's House"
        },
        {
            image: "/images/late-night.jpg",
            name: "Late Night Vibes"
        }
    ], [pathname]);

    return(
        <>
            <div className={
                "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl: grid-cols-4 gap-3 mt-4"
            }>
                {routes.map((item) => (
                    <ListItem key= { item.name } { ...item } />
                ))}
            </div>

        </>
    )
};

export default Topbar;