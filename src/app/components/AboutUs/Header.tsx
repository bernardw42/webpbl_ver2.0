"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import truk from "../../../../public/aboutus/truk.png";
import garasi from "../../../../public/aboutus/garasi.png";
import heads from "../../../../public/aboutus/box.png";
import org from "../../../../public/aboutus/org.png";
import { useTranslation } from "next-export-i18n";

export default function Header() {
  const { t } = useTranslation();

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (headerInView) {
      setShowHeader(true);
    }
  }, [headerInView]);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setShowTitle(true);
    }
  }, [titleInView]);

  // Truk Section
  const [div1Ref, div1InView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  const [div11Ref, div11InView] = useInView({
    triggerOnce: true,
    rootMargin: "400px 0px",
  });

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv11, setShowDiv11] = useState(false);

  useEffect(() => {
    if (div1InView) {
      setShowDiv1(true);
    }
  }, [div1InView]);

  useEffect(() => {
    if (div11InView) {
      setShowDiv11(true);
    }
  }, [div11InView]);

  // Garasi Section
  const [div2Ref, div2InView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px",
  });
  const [div22Ref, div22InView] = useInView({
    triggerOnce: true,
    rootMargin: "400px 0px",
  });

  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv22, setShowDiv22] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    if (div2InView) {
      setShowDiv2(true);
    }
  }, [div2InView]);

  useEffect(() => {
    if (div22InView) {
      setShowDiv22(true);
    }
  }, [div22InView]);

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
    <div className="flex flex-col justify-center items-center">
      <div className={`relative w-full ${
        isMobileLandscape ? 'h-[1080px]' : 'h-screen'
      } flex justify-center items-center bg-white overflow-hidden`}>
      <div className="relative flex items-center max-lg:w-[90%] w-[95%] h-[85%] mt-[80px] z-0 overflow-hidden rounded-2xl">
        {/* Background Images with Parallax Effect */}
        
        {/* Heads Image */}
        <div className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover brightness-75" style={{ backgroundImage: `url(${heads.src})` }}></div>
        
        {/* Org Image */}
        <div ref={titleRef} className={`absolute max-[1025px]:hidden inset-0 flex items-center justify-center w-full h-full bg-fixed bg-no-repeat brightness-75 transition-all duration-[1500ms] mt-[100px] ${titleInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-15%]"}`} style={{ backgroundImage: `url(${org.src})`, backgroundSize: 'contain', backgroundPosition: '20%' }}>

        </div>
      </div>



        <div className="absolute flex justify-end max-w-7xl mx-auto items-center text-white px-10 z-10">
          <div
            ref={headerRef}
            className={`text-right w-[55%] max-md:w-[90%] max-sm:w-[100%] drop-shadow-2xl px-10 max-sm:px-0 transition-opacity duration-[1500ms] ease-in-out ${
              showHeader ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className=" pb-[10px] font-bold text-[35px] max-md:text-2xl max-md:leading-[50px] leading-[70px]">
            {t('abtHeader.h1')} <span className="text-[#FF2626]">{t('abtHeader.h2')}</span> {t('abtHeader.h3')}
            </h1>
          </div>
        </div>
      </div>


      <div className="bg-white w-full flex justify-center items-center flex-col pb-[200px] pt-[200px] max-lg:pb-[150px] max-lg:pt-[150px] gap-y-[70px] overflow-hidden">
        {/* Truk Section */}
        <div className="flex flex-col min-[900px]:flex-row justify-center gap-y-[65px] gap-x-[70px] px-8 max-w-7xl items-center">
          <div className="relative flex flex-col w-full items-center justify-center max-w-[500px] flex-shrink-0">
            <div
              ref={div11Ref}
              className={`flex bg-[#CC0033] w-full max-w-[450px] h-[60px] absolute bottom-[-40px] transition-opacity rounded-b-2xl duration-1000 z-10 ${
                showDiv11 ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={truk}
              alt="truk"
              className={`w-[450px] h-auto transition-all duration-[1500ms] delay-1000 z-0 ${
                showDiv1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15%]"
              }`}
              ref={div1Ref}
            />
          </div>
          <h1
            className={`text-[20px] max-[900px]:text-center text-black transition-all duration-1000 delay-500 ${
              showDiv1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"
            }`}
          >
            {t("abtp.h1")}
          </h1>
        </div>

        {/* Garasi Section */}
        <div className="flex flex-col min-[900px]:flex-row-reverse justify-center gap-y-[65px] gap-x-[70px] px-8 max-w-7xl items-center">
          <div className="relative flex flex-col w-full items-center justify-center max-w-[500px] flex-shrink-0">
            <div
              ref={div22Ref}
              className={`flex bg-[#CC0033] w-full max-w-[450px] h-[60px] absolute bottom-[-40px] transition-opacity rounded-b-2xl duration-1000 z-10 ${
                showDiv22 ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={garasi}
              alt="garasi"
              className={`w-[450px] h-auto transition-all duration-[1500ms] delay-1000 z-0 ${
                showDiv2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15%]"
              }`}
              ref={div2Ref}
            />
          </div>
          <h1
            className={`text-[20px] text-right max-[900px]:text-center text-black transition-all duration-1000 delay-500 ${
              showDiv2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
            }`}
          >
            {t("abtp.h2")}
          </h1>
        </div>
      </div>
    </div>
  );
}
