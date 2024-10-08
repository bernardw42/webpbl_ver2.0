'use client';

import { useTranslation, LinkWithLocale, LanguageSwitcher } from 'next-export-i18n';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/../public/navbar/logo1.webp';
import globe from '@/../public/navbar/world.png';
import MobileMenu from './NavbarMobilePages';

export default function Navbar() {
  const { t } = useTranslation();
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 bg-white backdrop-blur-sm transition duration-300 rounded-b-2xl ${top ? '' : 'shadow-2xl'}`}>
      <div className="max-w-7xl mx-auto px-6 py-1 max-lg:py-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 z-10">
            <LinkWithLocale href="/">
              <Image src={Logo} alt='Logo' className='w-[100px] max-md:w-[70px]' />
            </LinkWithLocale>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <LinkWithLocale href="/aboutus" className='font-medium text-[17px] text-black hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl'>
                  {t('NavBar.p1')}
                </LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/services" className='font-medium text-[17px] text-black hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl'>
                  {t('NavBar.p2')}
                </LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/article" className='font-medium text-[17px] text-black hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl'>
                  {t('NavBar.p3')}
                </LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/contactus" className='font-medium text-[17px] text-black hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl'>
                  {t('NavBar.p4')}
                </LinkWithLocale>
              </li>
              <div className='flex flex-wrap items-center px-4 font-medium gap-x-1'>
                <Image src={globe} alt='lang' className='w-[30px] drop-shadow-2xl invert' />
                <LanguageSwitcher lang="en" className={`font-medium text-[17px] text-black hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <p className='font-medium text-[17px] text-black hover:text-gray-600'>EN</p>
                </LanguageSwitcher>
                <p className={`font-medium text-[17px] text-black py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>|</p>
                <LanguageSwitcher lang="id" className={`font-medium text-[17px] text-black hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <p className='font-medium text-[17px] text-black hover:text-gray-600'>ID</p>
                </LanguageSwitcher>
              </div>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
