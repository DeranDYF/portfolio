"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3BottomRightIcon, XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        isActive: "#home",
        title: "Home",
        path: "#home",
    },
    {
        isActive: "#experience",
        title: "Experience",
        path: "#experience",
    },
    {
        isActive: "#mywork" ,
        title: "My Work",
        path: "#mywork",
    },
    {
        isActive: "#contact",
        title: "Contact",
        path: "#contact",
    }
];


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 p-4">
                <Link href="/" className="lg:px-7">
                    <Image src="/dyfzn/logo-new.png" alt="my profile" width={30} height={30} />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3BottomRightIcon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto me-8" id="navbar">
                    <ul className="flex p-4 md:p-0 md:space-x-4 mt-0 font-bold">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            {showArrow && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-gray-200 hover:text-white rounded-lg p-2"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </button>
            )}
        </nav>
    );
};

export default NavBar;

