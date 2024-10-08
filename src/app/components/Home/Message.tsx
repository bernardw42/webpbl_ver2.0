"use client"

import { useRef } from "react";
import mail from "@emailjs/browser";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "next-export-i18n";

export default function MessageHome() {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px', // Adjust the root margin as needed
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

    return (
        <div className="relative w-full h-full flex justify-center items-center bg-[white] overflow-hidden">
            <div className="bg-[#033C5A] max-lg:w-[90%] w-[80%] h-full pt-[70px] pb-[70px] max-lg:pb-[50px] max-lg:pt-[50px] flex justify-center items-center rounded-2xl">
                <div className="flex flex-wrap max-lg:flex-col justify-center items-center max-w-7xl gap-x-[100px] gap-y-[70px] px-7">
                    <div className="flex flex-col max-lg:max-w-[400px] max-w-[500px] gap-y-[50px]">
                        <h1 className="text-white text-[40px] max-md:text-[35px] font-semibold">{t('HomeMessage.h')}</h1>
                        <p className="text-white text-[18px] max-md:text-[15px] font-extralight">{t('HomeMessage.p')}</p>
                    </div>
                    <div className={`bg-white rounded-2xl w-[600px] max-md:w-[400px] max-sm:w-[280px] h-[690px] max-md:h-[710px] flex flex-col justify-between items-center py-10 transition-opacity duration-[2000ms] drop-shadow-2xl ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
                        <h2 className="text-[40px] max-md:mb-[20px] max-md:text-[32px] tracking-tight font-extrabold text-center text-gray-900 max-w-[500px] px-6">{t('HomeMessage.h2')}</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{t('HomeMessage.p1')}</label>
                                <input type="text" name="from_name" id="name" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder={t('HomeMessage.p6')} required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{t('HomeMessage.p2')}</label>
                                <input type="email" name="from_email" id="email" className="block p-2 w-[500px] max-md:w-[320px] max-sm:w-[250px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder={t('HomeMessage.p7')} required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">{t('HomeMessage.p3')}</label>
                                <input type="text" name="subject" id="subject" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder={t('HomeMessage.p8')} required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{t('HomeMessage.p4')}</label>
                                <textarea name="message" id="message" rows={6} className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder={t('HomeMessage.p9')} required></textarea>
                            </div>
                            <button type="submit" className="w-[500px] max-md:w-[300px] max-sm:w-[250px] bg-red-600 hover:bg-red-900 text-white py-3 px-5 rounded-lg">{t('HomeMessage.p5')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
