import { useTranslation } from 'next-export-i18n';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  date: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
  links: string;
}

const Card: React.FC<CardProps> = ({ title, date, desc, image, className, links }) => {
  const { t } = useTranslation();

  return (
    <div className={`relative flex flex-col max-w-[400px] ${className}`}>
      <div className='bg-gray-600 rounded-t-2xl drop-shadow-xl min-h-[200px] max-w-[400px] overflow-hidden'>
        <Image src={image} alt="tes" layout="fill" objectFit="cover" className="rounded-t-2xl drop-shadow-xl" />
      </div>
      <div className='bg-white flex flex-col justify-start min-h-[320px] drop-shadow-2xl rounded-b-xl px-8 py-8 border-r-red-500'>
        <div className='min-h-[65px]'>
          <h2 className="text-[20px] font-medium max-h-[65px] text-black line-clamp-2">{title}</h2>
        </div>
        <p className="text-[14px] max-h-[35px] text-gray-500 pt-[15px] mb-[5px]" >{date}</p>
        <div className='min-h-[100px]'>
          <p className="text-[14px] max-h-[100px] font-normal text-black  line-clamp-4">{desc}</p>
        </div>
        <ul className='pt-[15px] '>
          <li>
            <Link href={links} className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold rounded-full px-3 py-2 transition duration-150 ease-in-out text-[12px]">
            {t('artc.h')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
