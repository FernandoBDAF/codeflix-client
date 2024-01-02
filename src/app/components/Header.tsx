"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`
                            ${isScrolled && "bg-black"}
                            fixed 
                            top-0 
                            z-50 
                            flex 
                            w-full
                            items-center
                            justify-between
                            px-4
                            py-4
                            lg:px-10
                            lg:py-6`}
                            >
            <div className="
                            flex
                            items-center
                            space-x-2
                            md:space-x-8
                            ">
                <img src="/vozao.jpg" alt="Vozao" width={120} height={120} />
                <ul className="hidden md:flex md:space-x-4">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                </ul>
            </div>
            <div className="
                            flex
                            items-center
                            space-x-4
                            ">
                <p className="hidden cursor-not-allowed lg:inline">Kids</p>
                <img src="/ogre2.png" className="w-16 h-16"/>
            </div>
        </header>
    )
}