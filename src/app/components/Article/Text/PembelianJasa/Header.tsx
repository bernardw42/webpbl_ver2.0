"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tab from "@/../public/article/9-4-2024pembelianjasa/yes.webp";
import { useTranslation } from "next-export-i18n";

export default function Header() {
  const { t } = useTranslation();

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const [showHeader, setShowHeader] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    if (headerInView) {
      setShowHeader(true);
    }
  }, [headerInView]);

  // Function to check if the device is mobile and in landscape mode
  const checkMobileLandscape = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const isMobile = window.matchMedia('(max-height: 767px)').matches; // Changed to max-height
    console.log('isLandscape:', isLandscape, 'isMobile:', isMobile); // Debugging
    setIsMobileLandscape(isLandscape && isMobile);
  };

  // Add event listener on resize and orientation change
  useEffect(() => {
    checkMobileLandscape(); // Initial check on component mount

    window.addEventListener('resize', checkMobileLandscape);
    window.addEventListener('orientationchange', checkMobileLandscape);

    return () => {
      window.removeEventListener('resize', checkMobileLandscape);
      window.removeEventListener('orientationchange', checkMobileLandscape);
    };
  }, []);

  return (
    <div className={`relative w-full flex flex-col ${isMobileLandscape ? 'h-[540px]' : 'h-[50vh]'} justify-center items-center bg-[white] overflow-hidden`}>
        <div className="w-full max-w-7xl px-4 mt-[100px] flex items-center justify-start">
            {/* Back Arrow and Text */}
            <button onClick={() => window.history.back()} className="flex items-center font-bold text-red-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 19l-7-7h14l-7 7zm0-2.17l4.59-4.59H5.41L10 16.83zm0-12.66L5.41 9.83h9.18L10 4.17z" />
                </svg>
                <span>{t('artc.h3')}</span>
            </button>
            
            {/* Divider */}
            <span className="mx-4 text-black">|</span>
            
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2">
                <a href="/article" className="text-gray-500 hover:underline">{t('art.h1')}</a>
                <span className="text-gray-500">{'>'}</span>
                <span className="text-gray-500 max-sm:max-w-[150px] truncate">Pembelian Jasa dengan Momentum Tahun 2024</span>
            </nav>
        </div>

        <div className="relative flex items-center max-lg:w-[90%] w-[95%] max-w-7xl h-[70%] mt-[20px] z-0 overflow-hidden rounded-2xl mx-auto">
            <div
                className="absolute inset-0 w-full h-full bg-fixed bg-bottom bg-cover brightness-50"
                style={{ backgroundImage: `url(${tab.src})` }}
            ></div>
            </div>

        
        <div className="absolute top-[54%] max-sm:top-[52%] max-md:top-[57%] inset-0 flex justify-center items-start max-w-7xl mx-auto px-10 z-20">
            <div
                ref={headerRef}
                className={`w-full text-left max-md:text-center drop-shadow-2xl transition-opacity duration-[1500ms] ease-in-out px-10 ${showHeader ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-3xl md:text-5xl sm:text-4xl lg:text-6xl font-bold text-white">
                    Pembelian Jasa dengan Momentum Tahun 2024
                </h1>
            </div>
        </div>
    </div>
  );
}
