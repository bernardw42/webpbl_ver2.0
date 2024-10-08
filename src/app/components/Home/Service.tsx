"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './ServiceCard/Card';
import img from '@/../public/home/tes (1).png';
import img2 from '@/../public/home/tes (2).png';
import img3 from '@/../public/home/tes (3).png';
import { useTranslation } from 'next-export-i18n';

export default function Service() {
  const { t } = useTranslation();
  const CardData = [
    {
      title: t('HomeCard.title3'),
      desc: t('HomeCard.desc3'),
      image: img,
    },
    {
      title: t('HomeCard.title1'),
      desc: t('HomeCard.desc1'),
      image: img2,
    },
    {
      title: t('HomeCard.title2'),
      desc: t('HomeCard.desc2'),
      image: img3,
    },
  ];
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust the root margin as needed
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10px 0px', // Adjust the root margin as needed
  });

  return (
    <div className="bg-white h-full pt-[130px] pb-[70px] max-lg:pb-[60px] max-md:pt-[100px] flex flex-col justify-center items-center" ref={textRef}>
      <div className="flex flex-col justify-center items-center text-[#033C5A]">
        <h1 className='text-[40px] max-md:text-[35px] max-w-7xl px-6 text-center font-semibold'>{t('HomeService.h')}</h1>
        <p className='text-[18px] max-md:text-[15px] max-w-7xl px-6 text-center mb-[120px] font-light'>{t('HomeService.p')}</p>
      </div>
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
    </div>
  );
}

