"use client"

import React from "react";
import Marquee from "react-fast-marquee";

import Image from "next/image"
import img1 from "../../../../public/home/partner/spons (1).webp"
import img2 from "../../../../public/home/partner/spons (2).webp"
import img3 from "../../../../public/home/partner/spons (3).webp"
import img4 from "../../../../public/home/partner/spons (4).webp"
import img5 from "../../../../public/home/partner/spons (5).webp"
import img6 from "../../../../public/home/partner/spons (6).webp"
import img7 from "../../../../public/home/partner/spons (7).webp"
import img8 from "../../../../public/home/partner/spons (8).webp"
import img9 from "../../../../public/home/partner/spons (9).webp"
import img10 from "../../../../public/home/partner/spons (10).webp"
import img11 from "../../../../public/home/partner/spons (11).webp"
import img12 from "../../../../public/home/partner/spons (12).webp"
import img13 from "../../../../public/home/partner/spons (13).webp"
import img14 from "../../../../public/home/partner/spons (14).webp"
import img15 from "../../../../public/home/partner/spons (15).webp"
import img16 from "../../../../public/home/partner/spons (16).webp"
import img17 from "../../../../public/home/partner/spons (17).webp"
import img18 from "../../../../public/home/partner/spons (18).webp"
import img19 from "../../../../public/home/partner/spons (19).webp"
import img20 from "../../../../public/home/partner/spons (20).webp"
import img21 from "../../../../public/home/partner/spons (21).webp"
import img22 from "../../../../public/home/partner/spons (22).webp"
import img23 from "../../../../public/home/partner/spons (23).webp"
import img24 from "../../../../public/home/partner/spons (24).webp"
import img25 from "../../../../public/home/partner/spons (25).webp"
import img26 from "../../../../public/home/partner/spons (26).webp"
import img27 from "../../../../public/home/partner/spons (27).webp"
import { useTranslation } from "next-export-i18n";


export default function Credits() {
    const { t } = useTranslation();
    // Array containing all image paths
    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27
    ];

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center pt-[150px] pb-[200px]">
            <h1 className="text-[#FF2626] font-semibold text-[40px] max-md:text-[35px] mb-[70px]">{t('CredsClient.h')}</h1>
            <Marquee pauseOnHover>
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={`img${index}`} className="w-[280px] max-md:w-[250px] max-md:mx-[-40px]" />
                ))}
            </Marquee>
            <div className="md:hidden pt-[50px]">
                <Marquee pauseOnHover direction="right">
                    {images.map((img, index) => (
                        <Image key={index} src={img} alt={`img${index}`} className="w-[280px] max-md:w-[250px] max-md:mx-[-40px]" />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}