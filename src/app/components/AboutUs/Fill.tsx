/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import truk from "../../../../public/aboutus/yes.png";
import poin from "../../../../public/aboutus/poin.png";
import yes1 from "../../../../public/aboutus/1 (1).png";
import yes2 from "../../../../public/aboutus/1 (2).png";
import yes3 from "../../../../public/aboutus/1 (3).png";
import yes4 from "../../../../public/aboutus/1 (4).png";
import yes5 from "../../../../public/aboutus/1 (5).png";
import yes6 from "../../../../public/aboutus/1 (6).png";
import yes7 from "../../../../public/aboutus/1 (7).png";
import yes8 from "../../../../public/aboutus/1 (8).png";
import { Transition } from 'react-transition-group';
import { useTranslation } from 'next-export-i18n';

const images = [yes1, yes2, yes3, yes4, yes5, yes6, yes7, yes8];

export default function Fill() {
    const { t } = useTranslation();
    const [textRef, textInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [poinRef, poinInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [cardRef, cardInView] = useInView({
        triggerOnce: true,
        rootMargin: '100px 0px', // Adjust the root margin as needed
      });

    const [showText, setShowText] = useState(false);
    const [showPoin, setShowPoin] = useState(false);

    // When each element comes into view, set its respective state to true
    useEffect(() => {
        if (textInView) {
            setShowText(true);
        }
    }, [textInView]);

    useEffect(() => {
        if (poinInView) {
            setShowPoin(true);
        }
    }, [poinInView]);

    return (
        <div className="w-full relative">
            <div className="drop-shadow-lg w-full h-[200px] bg-cover bg-fixed bg-top" style={{backgroundImage: `url(${truk.src})`}}>
            </div>
            <div className="bg-white w-full pb-[200px] pt-[200px] max-lg:pb-[150px] flex justify-center items-center">
                <div className="max-w-7xl flex flex-col justify-center items-center gap-y-[150px] px-8">
                    <h1 className={`text-[25px] text-black text-center font-medium py-4 transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`} ref={textRef}>{t("Fill.h")}</h1>
                    <div className="flex justify-center flex-wrap gap-y-[30px] items-center text-center" ref={cardRef}>
                        {images.map((image, index) => (
                            <Transition key={`image-${index}`} in={cardInView} timeout={200 * (index + 1)}>
                                {state => (
                                    <div className={`${
                                        state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                                    } transition-all duration-[1500ms] ease-in-out`}>
                                        <Image src={image} alt={`Image ${index}`} className='w-[280px] h-auto' />
                                    </div>
                                )}
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}





