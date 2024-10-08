"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    FaInstagram,
    FaTiktok,
    FaTelegramPlane,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";

export default function Floating() {
    const [isVisible, setIsVisible] = useState(false);
    const footerHeight = 200; // The height of the footer in pixels

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show floating buttons if user is past the initial screen height but not yet at the footer
            if (window.scrollY > window.innerHeight && scrollPosition < documentHeight - footerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50 transition-opacity duration-300 max-[1025px]:hidden ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <Link
                href="mailto:customer.service@pbl.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#CC0033] text-white rounded-full shadow-lg duration-300 hover:bg-[#033C5A] transition"
            >
                <FaEnvelope size={24} />
            </Link>
            <Link
                href="http://wa.me/6285217177239"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#CC0033] text-white rounded-full shadow-lg duration-300 hover:bg-[#033C5A] transition"
            >
                <FaWhatsapp size={24} />
            </Link>
            <Link
                href="https://www.instagram.com/pancabudilogistindo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#CC0033] text-white rounded-full shadow-lg duration-300 hover:bg-[#033C5A] transition"
            >
                <FaInstagram size={24} />
            </Link>
            <Link
                href="https://www.tiktok.com/@pancabudilogistindo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#CC0033] text-white rounded-full shadow-lg duration-300 hover:bg-[#033C5A] transition"
            >
                <FaTiktok size={24} />
            </Link>
        </div>
    );
}
