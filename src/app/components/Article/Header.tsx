"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tab from "../../../../public/article/yes3.webp";
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
    <div className={`relative w-full ${
      isMobileLandscape ? 'h-[540px]' : 'h-[51vh]'
    } flex justify-center items-center bg-white overflow-hidden`}>
      <div className="relative flex items-center max-lg:w-[90%] w-[95%] h-[70%] mt-[80px] z-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 w-full h-full bg-fixed bg-bottom bg-cover brightness-50" style={{ backgroundImage: `url(${tab.src})` }}></div>
      </div>
      <div className="absolute top-[50%] max-md:top-[55%] inset-0 flex justify-center items-start max-w-7xl mx-auto px-10 z-20">
        <div
          ref={headerRef}
          className={`w-full text-left max-md:text-center drop-shadow-2xl transition-opacity duration-[1500ms] ease-in-out px-10 ${
            showHeader ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl sm:text-4xl lg:text-6xl font-bold text-white ">
            {t('art.h1')}
          </h1>
        </div>
      </div>
    </div>
  );
}
