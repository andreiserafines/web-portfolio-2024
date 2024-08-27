import React, { useState, useEffect } from "react";
import { GiHighFive } from "react-icons/gi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            const currentIsDesktop = window.innerWidth >= 768;
            if (currentIsDesktop !== isDesktop) {
                setIsDesktop(currentIsDesktop);
                if (currentIsDesktop) {
                    setMenuOpen(false);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isDesktop]);

    return (
        <header className="z-50 md:bg-transparent md:filter md:backdrop-blur-lg border-b border-transparent shadow-2xl sticky top-0">
            <nav className="container mx-auto flex justify-between p-3 md:p-2 lg:p-3 relative">
                {/* Logo */}
                <a href="./index.html" className="flex items-center">
                    <h1 className="text-transparent flex items-center bg-clip-text bg-gradient-to-r from-sky-400 to-zinc-100 text-2xl md:text-xl lg:text-2xl font-semibold">
                        andrei.
                    </h1>
                </a>
                

                {/* Navbar links with smooth dropdown */}
                <ul
                    className={`absolute md:relative top-full left-0 w-full md:w-auto text-center items-center p-4 md:p-0 
                    flex-col md:flex-row md:text-center md:gap-4 lg:gap-6 xl:gap-8 text-white text-sm md:text-sm transition-all duration-300 ease-in-out overflow-hidden 
                    md:flex lg:flex xl:flex h-screen md:h-auto bg-slate-800 bg-opacity-50 backdrop-blur-md md:bg-transparent border-b border-slate-800 md:border-0
                    ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}
                >
                    <li className="py-2 md:py-1 lg:py-2">
                        <a href="#Overview" className="hover:text-sky-200 cursor-pointer block md:inline-block p-1">
                            Overview
                        </a>
                    </li>
                    <li className="py-2 md:py-1 lg:py-2">
                        <a href="#about" className="hover:text-sky-200 cursor-pointer block md:inline-block p-1">
                            About
                        </a>
                    </li>
                    <li className="py-2 md:py-1 lg:py-2">
                        <a href="#Skills" className="hover:text-sky-200 cursor-pointer block md:inline-block p-1">
                            Skills
                        </a>
                    </li>
                    <li className="py-2 md:py-1 lg:py-2">
                        <a href="#portfolio" className="hover:text-sky-200 cursor-pointer block md:inline-block p-1">
                            Portfolio
                        </a>
                    </li>
                    <li className="py-2 md:py-1 lg:py-2">
                        <a href="#contacts" className="hover:text-sky-200 cursor-pointer block md:inline-block p-1">
                            Contacts
                        </a>
                    </li>
                </ul>

                {/* Hire Me Button */}
                <button className="mt-4 md:mt-0 bg-slate-800 text-sm hidden sm:text-xs md:text-sm lg:text-sm font-normal text-gray-300 hover:text-white transition duration-300 py-1.5 px-4 rounded-md hover:bg-slate-700 shadow-xl md:flex items-center gap-1">
                    <GiHighFive size={20} /> <a href="facebook">Hire Me</a>
                </button>

                {/* Menu Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="border text-gray-300 border-slate-600 md:mt-0 bg-slate-800 text-base font-normal py-1.5 px-3 rounded-md hover:bg-slate-700 shadow-xl md:hidden lg:hidden xl:hidden">
                    {menuOpen ? <CgClose size={24} /> : <CgMenuRightAlt size={24} />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
