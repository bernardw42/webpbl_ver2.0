"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './Card/Card';
import Image from 'next/image';
import para from '../../../../public/services/trukk.webp';
import truk from '../../../../public/services/yeet.webp';
import img from "../../../../public/services/img.png"
import img2 from "../../../../public/services/img1.png"
import img3 from "../../../../public/services/img3.png"
import { useTranslation } from 'next-export-i18n';

export default function Header() {
    const { t } = useTranslation()

    const CardData = [
        {
          title: t('ServCard.title1'),
          desc: t('ServCard.desc1'),
          image: img,
        },
        {
          title: t('ServCard.title2'),
          desc: t('ServCard.desc2'),
          image: img2,
        },
        {
          title: t('ServCard.title3'),
          desc: t('ServCard.desc3'),
          image: img3,
        },
    ];

    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [cardRef, cardInView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px', // Adjust the root margin as needed
      });

    const [showTitle, setShowTitle] = useState(false);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);

    // When the section comes into view, set corresponding show variables to true
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
        <div className="flex flex-col justify-center items-center relative">
            <div className={`relative w-full ${
            isMobileLandscape ? 'h-[900px]' : 'h-screen'
            } flex justify-center items-center bg-white overflow-hidden`} ref={titleRef}>
                <div className="max-w-7xl flex flex-col justify-between items-center relative px-8">
                    <h1 className={`text-center min-[1025px]:text-left min-[1300px]:mr-[650px] min-[1025px]:mr-[300px] lg:pb-[150px] min-[1300px]:pb-10 pb-[100px] text-[#033C5A] font-bold text-[35px] max-md:text-2xl max-md:leading-[50px] transition-all duration-[1500ms] leading-[70px] opacity-0 ${showTitle ? 'opacity-100' : ''}`}>
                        {t('Serv.h1')} <span className="text-[#FF2626]">{t('Serv.h2')}</span> {t('Serv.h3')}
                    </h1>
                    <Image
                        src={para}
                        alt="truk"
                        className={`w-[1000px] h-auto transition-all duration-[1500ms] ${showTitle ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[15%]"} md:self-end md:justify-end`}
                    />
                </div>
            </div>
            <div className="drop-shadow-lg w-full h-[100px] bg-cover bg-fixed bg-top" style={{backgroundImage: `url(${truk.src})`}}>
            </div>
            <div className='bg-white w-full flex justify-center items-center flex-col pb-[200px] pt-[150px] max-lg:pb-[150px] max-lg:pt-[100px] relative z-10'>
                <h1 className='text-[#FF2626] text-[35px] max-md:text-2xl max-md:leading-[50px] font-bold text-center px-6 mb-[220px]'>{t('ServCard.h')}</h1>
                <div className="flex justify-center flex-wrap gap-y-[120px] items-center gap-x-[50px] text-center px-8" ref={cardRef}>
                    {CardData.map((CardDetail, index) => (
                    <Transition key={CardDetail.title} in={cardInView} timeout={500 * index}>
                        {(state) => (
                        <Card
                            key={CardDetail.title}
                            {...CardDetail}
                            className={`${
                            state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'
                            } transition-all duration-[1500ms] ease-in-out`}
                        />
                        )}
                    </Transition>
                    ))}
                </div>
                {/* <Image src={build} alt='build' className='w-screen h-[300px] object-cover z-10 max-[1275px]:mt-[100px] max-[853px]:mt-[100px] mt-[150px]'></Image> */}
            </div>

        </div>
    );
}


