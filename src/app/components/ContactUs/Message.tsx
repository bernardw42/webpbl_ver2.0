/* eslint-disable react/no-unescaped-entities */
"use client"

import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

import loc from "../../../../public/contactus/loc.png";
import pon from "../../../../public/contactus/pon.png";
import mailimg from "../../../../public/contactus/mail.png";
import pin from "../../../../public/contactus/pin.png";
import org from "../../../../public/contactus/org.webp";
import mail from "@emailjs/browser";
import { useTranslation } from 'next-export-i18n';

export default function Message() {
    const { t } = useTranslation();
    const [textRef, textInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });
    const [ref2, secinView] = useInView({
        triggerOnce: true,
        rootMargin: '-350px 0px', // Adjust the root margin as needed
    });

    // Use a more specific type for the form ref
    const form = useRef<HTMLFormElement | null>(null);

    // Explicitly type the event parameter
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            mail.sendForm('619010', '619010t', form.current, 'jVE_smCt93rF5306L')
                .then((result) => {
                    console.log(result.text);
                    alert('Message Sent Successfully!');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to Send Message.');
                });
        }
    };

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);

    // Effect to update height on window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
            <div className={`relative bg-[#F9F9F9] flex-col w-full ${
            isMobileLandscape ? 'h-[850px]' : 'h-screen'
            } flex items-center overflow-hidden`} ref={textRef}>
                <div className="max-w-7xl flex flex-col justify-start px-8 z-10 overflow-hidden">
                    <h1 className={`mt-[150px] text-left min-[1025px]:text-left min-[1300px]:mr-[650px] min-[1025px]:mr-[300px] text-[#033C5A] font-bold text-[35px] max-md:text-2xl ${isMobileLandscape ? 'text-2xl leading-[50px]' : ''} max-md:leading-[50px] transition-all duration-[1500ms] leading-[70px] opacity-0 ${textInView ? 'opacity-100' : ''}`}>
                        {t('cont.h1')}
                    </h1>
                    <h1 className={`text-left min-[1025px]:text-left min-[1300px]:mr-[650px] min-[1025px]:mr-[300px] text-[#033C5A] font-medium text-[35px] max-md:text-2xl ${isMobileLandscape ? 'text-2xl leading-[50px]' : ''} max-md:leading-[50px] transition-all duration-[1500ms] leading-[70px] opacity-0 ${textInView ? 'opacity-100' : ''}`}>
                        {t('cont.h2')}
                    </h1>
                </div>

                <div
                    ref={textRef}
                    className={`z-0 absolute bottom-0 left-[15%] max-[1025px]:left-[4%] flex bg-fixed bg-no-repeat bg-contain transition-all duration-[1500ms] w-full ${
                        textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[15%]"
                    } ${windowHeight < 850 ? 'h-[500px]' : 'h-[800px]'}`}
                    style={{
                        backgroundImage: `url(${org.src})`,
                        backgroundPosition: 'bottom center', // Ensure the image starts from the bottom center
                    }}
                >
                    {/* You can control size and position here with padding and margins if necessary */}
                </div>

            </div>

            <div className='bg-white flex justify-center w-full min-h-[1020px] pb-[200px] pt-[200px] max-lg:pb-[150px] max-lg:pt-[150px]' ref={ref2}>
                <div className={`flex justify-center flex-wrap gap-x-[50px] gap-y-[70px] duration-[1500ms] ${secinView ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Form Section */}
                        <div className='flex flex-col justify-start max-w-[650px] w-full md:w-auto gap-y-[30px] px-8'>
                            <h2 className="text-[35px] text-[#2E364D] font-bold">{t('mess.h2')}</h2>
                            <div className={` rounded-2xl w-[600px] max-md:w-[400px] max-sm:w-[280px] h-full flex flex-col justify-between`}>

                                <form ref={form} onSubmit={sendEmail} className="space-y-2">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{t('mess.p1')}</label>
                                        <input type="text" name="from_name" id="name" className="block p-2 w-[500px] max-sm:w-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder={t('mess.p6')} required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{t('mess.p2')}</label>
                                        <input type="email" name="from_email" id="email" className="block p-2 w-[500px] max-sm:w-[300px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder={t('mess.p7')} required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">{t('mess.p3')}</label>
                                        <input type="text" name="subject" id="subject" className="block p-2 w-[500px] max-sm:w-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder={t('mess.p8')} required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{t('mess.p4')}</label>
                                        <textarea name="message" id="message" rows={6} className="block p-2 w-[500px] max-sm:w-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder={t('mess.p9')} required></textarea>
                                    </div>
                                    <button type="submit" className="w-[500px] max-sm:w-[300px] bg-red-600 hover:bg-red-900 text-white py-3 px-5 rounded-lg">{t('mess.p5')}</button>
                                </form>
                            </div>
                    </div>
                    <div className='flex flex-col max-w-[650px] gap-y-[50px] px-8'>
                        <div className='flex flex-col gap-y-[30px]'>
                            {/* <h1 className='text-[35px] text-[#2E364D] font-bold'>{t('conss.h1')}</h1>
                            <iframe src="https://storage.googleapis.com/maps-solutions-ud4xv5z4g0/locator-plus/nkr4/locator-plus.html" className='w-[600px] h-[460px] max-md:w-[400px] max-md:h-[350px] max-[480px]:w-[325px] max-[380px]:w-[295px] border-0 rounded-2xl'>
                            </iframe> */}
                            <h1 className='text-[35px] text-[#2E364D] font-bold'>{t('conss.h2')}</h1>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={loc} alt={''} className='w-[50px] h-[50px]'></Image>
                                <p>Jl. KH. Agus Salim No 15 RT 002 / 05 Kel Poris Plawad, Kec Cipondoh Tangerang 15141, Indonesia</p>
                            </div>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={pon} alt={''} className='w-[50px] h-[50px]'></Image>
                                <p>(021) 552 4626, (021) 5573 0590, (021) 5573 0591</p>
                            </div>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={mailimg} alt={''} className='w-[50px] h-[50px]'></Image>
                                <p>info@pbl.co.id</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-[30px]'>
                            <h1 className='text-[35px] text-[#2E364D] font-bold'>{t('conss.h3')}</h1>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                                <p>Tangerang</p>
                            </div>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                                <p>{t('area.h1')}</p>
                            </div>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                                <p>{t('area.h2')}</p>
                            </div>
                            <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                                <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                                <p>{t('area.h3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
