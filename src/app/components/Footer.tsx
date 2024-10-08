'use client';

import { useTranslation, LinkWithLocale } from 'next-export-i18n';
import Image from 'next/image';
import Logo from '@/../public/navbar/logo1.webp';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='bg-white w-full h-full flex justify-center'>
            <div className="bg-[#F9F9F9] w-full lg:w-[80%] justify-center pt-[100px] pb-[150px] rounded-t-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className='flex flex-wrap gap-y-[50px] gap-x-[100px] px-6 justify-start'>
                        <div className="flex-col flex justify-between max-w-[400px] gap-y-[50px] px-2">
                            <LinkWithLocale href="/">
                                <Image src={Logo} alt="logo" className="w-[100px]"></Image>
                            </LinkWithLocale>
                            <div className="flex flex-col text-[#033C5A]">
                                <h1 className="text-[25px] font-semibold">{t('Footer.p5')}</h1>
                                <p className="text-[18px] font-normal">Jl. KH. Agus Salim No.15, RT.002/RW.05,
                                    Poris Plawad, Kec. Cipondoh, Kota Tangerang,
                                    Banten 15141</p>
                            </div>
                            <p className="text-[18px] font-normal text-[#033C5A]">Copyright @ 2024 pancabudilogistindo.co.id
                                All rights reserved.</p>
                        </div>
                        <div className="flex flex-col justify-between max-w-[500px] gap-y-[50px] px-2 ">
                            <ul className="flex flex-wrap text-[#033C5A] max-md:flex-col">
                                <li>
                                    <LinkWithLocale href="/aboutus" className="font-medium text-[17px] hover:text-[#2c365a] pr-5 py-3 max-md:pr-[0px] flex items-center transition duration-150 ease-in-out">
                                        {t('Footer.p1')}
                                    </LinkWithLocale>
                                </li>
                                <li>
                                    <LinkWithLocale href="/services" className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
                                        {t('Footer.p2')}
                                    </LinkWithLocale>
                                </li>
                                <li>
                                    <LinkWithLocale href="/article" className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
                                        {t('Footer.p3')}
                                    </LinkWithLocale>
                                </li>
                                <li>
                                    <LinkWithLocale href="/contactus" className="font-medium text-[17px] hover:text-[#2c365a] pl-5 py-3 max-md:pl-[0px] flex items-center transition duration-150 ease-in-out">
                                        {t('Footer.p4')}
                                    </LinkWithLocale>
                                </li>
                            </ul>
                            <div className="flex flex-col text-[#033C5A] mt-[28px]">
                                <h1 className="text-[25px] font-semibold">Email</h1>
                                <Link href="mailto:customer.service@pbl.co.id"  target="_blank" className="text-[18px] font-normal mb-[10px]">customer.service@pbl.co.id</Link>
                                <h1 className="text-[25px] font-semibold">{t('Footer.p6')}</h1>
                                <p className="text-[18px] font-normal">{t('Footer.p7')}</p>
                            </div>
                            <div className='flex flex-wrap gap-x-[25px] max-sm:gap-x-[10px] gap-y-[20px]'>
                                <Link href="mailto:customer.service@pbl.co.id"  target="_blank" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaEnvelope size={20} />
                                </Link>
                                <Link href="http://wa.me/6285217177239" target="_blank" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaWhatsapp size={20} />
                                </Link>
                                <Link href="https://www.instagram.com/pancabudilogistindo/" target="_blank" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaInstagram size={20} />
                                </Link>
                                <Link href="https://www.tiktok.com/@pancabudilogistindo" target="_blank" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaTiktok size={20} />
                                </Link>
                                <Link href="https://www.youtube.com/@pancabudilogistindo2476/featured"  target="_blank" className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaYoutube size={20} />
                                </Link>
                                <Link href="https://www.linkedin.com/company/pt-panca-budi-logistindo" target="_blank"  className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] bg-[#CC0033] rounded-full flex items-center justify-center text-white">
                                    <FaLinkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
