'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-export-i18n';

export default function Header() {
  const { t } = useTranslation();
  
  // Ref and state for the text fade-in effect
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  const [showTitle, setShowTitle] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setShowTitle(true);
    }
  }, [titleInView]);

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
    <div
      className={`relative w-full ${
        isMobileLandscape ? 'h-[1080px]' : 'h-screen'
      } flex justify-center items-center bg-white overflow-hidden`}
    >
      <div className="relative max-lg:w-[90%] w-[95%] h-[85%] mt-[80px] brightness-50">
        <video className="w-full h-full object-cover rounded-2xl" autoPlay muted loop>
          <source src="/home/pbl.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex justify-end max-w-7xl mx-auto items-center text-white px-10">
        <div
          ref={titleRef}
          className={`text-right w-[60%] max-md:w-[90%] max-sm:w-[100%] drop-shadow-2xl px-10 max-sm:px-0 transition-opacity duration-[1500ms] ease-in-out ${
            showTitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">
            {t('HomeHeader.h1')}
          </h1>
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">{t('HomeHeader.h2')}</h1>
          <h1 className="text-4xl pb-[50px] md:text-5xl sm:text-4xl lg:text-6xl font-bold text-[#FF2727]">
            Panca Budi Logistindo
          </h1>
          <p className="text-xl md:text-2xl lg:text-[20px] font-light">{t('HomeHeader.h3')}</p>
        </div>
      </div>
    </div>
  );
}
