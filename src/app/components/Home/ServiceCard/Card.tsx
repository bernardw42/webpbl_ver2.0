import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className }) => {
  return (
    <div className={`relative flex bg-white max-sm:w-[290px] w-[350px] h-[400px] rounded-2xl shadow-2xl px-8 py-[150px] ${className}`}>
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={image}
          alt={title}
          className="h-[170px] w-auto object-contain" // Tailwind CSS for fixed height and auto width
        />
      </div>
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-center text-[22px] font-semibold text-[#033C5A] min-h-[90px] items-center mb-[10px]">{title}</h1>
        <p className="text-center text-[15px] text-black">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
