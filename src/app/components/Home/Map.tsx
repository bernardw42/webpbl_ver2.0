"use client"

import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import tape from "@/../public/home/tape5.png"
import cases from "@/../public/home/case.webp";
import box from "@/../public/home/box.png"
import steps from "@/../public/home/steps2.png"
import pic1 from "@/../public/home/1.png"
import pic2 from "@/../public/home/2.png"
import pic3 from "@/../public/home/3.png"
import pic4 from "@/../public/home/4.png"
import card11 from "@/../public/home/card1.png"
import card22 from "@/../public/home/card2.png"
import card33 from "@/../public/home/card3.png"
import card44 from "@/../public/home/card4.png"
import { useTranslation } from 'next-export-i18n';



export default function Map() {
    const { t } = useTranslation();
    
    // Separate refs for tape and cases
    const [tapeRef, tapeInView] = useInView({
        triggerOnce: true,
        rootMargin: '-250px 0px',
    });

    const [casesRef, casesInView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card1, card1InView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card2, card2InView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card3, card3InView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card4, card4InView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card1m, card1InViewm] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card2m, card2InViewm] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [card3m, card3InViewm] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });
    const [card4m, card4InViewm] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    return (
        <div className="relative flex flex-col justify-center items-center">
            <div className="bg-white relative w-full flex justify-center items-center pb-[50px]">
                {/* Tape image with its own animation trigger */}
                <div className="relative w-screen h-full overflow-hidden">
                <Image
                    src={tape}
                    alt="tape"
                    className={`absolute top-[-50px] max-md:top-0 w-full max-md:h-[250px] h-[400px] object-cover z-20 transition-all duration-[2000ms] opacity-0 ${tapeInView ? 'opacity-100' : ''}`}
                    style={{ zIndex: 2 }}
                    ref={tapeRef}
                >
                </Image>
                    {/* Cases image with its own animation trigger */}
                    <Image
                        src={cases}
                        alt="cases"
                        className={`absolute z-0 max-[4000px]:top-[130px] max-[8000px]:top-[160px] left-[49%] max-[3500px]:left-[44%] w-[800px]
                            max-lg:w-[500px] max-lg:left-[65%] max-md:hidden
                            h-auto object-cover transition-all duration-[1500ms] delay-1000 opacity-0 ${casesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'}`}
                        ref={casesRef}
                        style={{ zIndex: 1 }}
                    />
                    <div className='w-screen h-full flex flex-col mt-[400px] max-md:mt-[300px] items-center'>
                        <div className='relative overflow-hidden max-w-7xl w-full justify-center flex flex-col px-8'>
                            <h1 className='max-w-[520px] text-[#033C5A] text-[30px] font-semibold mb-[170px] max-lg:mb-[70px]'>{t('HomeMap.h')}</h1>
                            <Image src={steps} alt='steps' className='ml-8 max-lg:hidden min-w-[1260px] max-w-[1260px] max-[1320px]:min-w-[1060px] max-[1320px]:max-w-[1060px] max-[1130px]:min-w-[860px] max-[1130px]:max-w-[860px] object-cover'></Image>
                            <div className='absolute top-[355px] object-cover ml-6'>
                                <Image src={pic1} alt='pic1' ref={card1} 
                                className={`min-w-[1100px] max-w-[1100px] max-[1320px]:min-w-[900px] max-[1320px]:max-w-[900px] max-[1130px]:min-w-[800px] max-[1130px]:max-w-[800px] max-lg:hidden
                                duration-[1500ms] transition-all ${card1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={pic2} alt='pic1' ref={card2} 
                                className={`min-w-[1100px] max-w-[1100px] max-[1320px]:min-w-[900px] max-[1320px]:max-w-[900px] max-[1130px]:min-w-[800px] max-[1130px]:max-w-[800px]  max-[1320px]:mt-[-330px] max-[1130px]:mt-[-310px] mt-[-400px] max-[1130px]:ml-[20px] ml-[50px] max-lg:hidden
                                duration-[1500ms] delay-500 transition-all ${card2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={pic3} alt='pic1' ref={card3} 
                                className={`min-w-[1100px] max-w-[1100px] max-[1320px]:min-w-[900px] max-[1320px]:max-w-[900px] max-[1130px]:min-w-[800px] max-[1130px]:max-w-[800px]  max-[1320px]:mt-[-350px] max-[1130px]:mt-[-330px] mt-[-440px] max-[1130px]:ml-[40px] ml-[100px] max-lg:hidden 
                                duration-[1500ms] delay-[750ms] transition-all ${card3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={pic4} alt='pic1' ref={card4} 
                                className={`min-w-[1100px] max-w-[1100px] max-[1320px]:min-w-[900px] max-[1320px]:max-w-[900px] max-[1130px]:min-w-[800px] max-[1130px]:max-w-[800px]  max-[1320px]:mt-[-330px] max-[1130px]:mt-[-300px] mt-[-400px] max-[1130px]:ml-[60px] ml-[110px] max-lg:hidden
                                duration-[1500ms] delay-[1000ms] transition-all ${card4InView  ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-y-[50px] px-4'>
                                <Image src={card11} ref={card1m} alt='card' className={`lg:hidden shadow-xl rounded-2xl w-[500px] transition-all duration-[1500ms] ${card1InViewm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={card22} ref={card2m} alt='card' className={`lg:hidden shadow-xl rounded-2xl w-[500px] transition-all duration-[1500ms] ${card2InViewm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={card33} ref={card3m} alt='card' className={`lg:hidden shadow-xl rounded-2xl w-[500px] transition-all duration-[1500ms] ${card3InViewm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                                <Image src={card44} ref={card4m} alt='card' className={`lg:hidden shadow-xl rounded-2xl w-[500px] transition-all duration-[1500ms] ${card4InViewm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-[-40px]'}`}></Image>
                            </div>
                            <Image src={box} alt='box' className='w-[300px] mt-[-150px] max-lg:mt-4'></Image>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}
