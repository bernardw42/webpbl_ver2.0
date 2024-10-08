// Head.tsx

"use client";

import { useState, useEffect, SetStateAction } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './Card/Card';
import Pagination from './Pagination';
import { posts } from './Post'; // Import the posts
import error from "@/../public/article/unders.webp"
import { useTranslation } from 'next-export-i18n';

export default function Art() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px',
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setShowTitle(true);
    }
  }, [titleInView]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setPostsPerPage(window.innerWidth <= 767 ? 3 : 6);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const variablePosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

  const paginate = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="bg-white w-full min-h-screen flex flex-col items-center pt-[100px] max-sm:pt-[70px] pb-[150px]">
        <div className="max-w-7xl w-full flex flex-col px-8 mb-[100px]" ref={titleRef}>
          <h1 className={`text-[#033C5A] font-bold text-4xl mb-16 max-lg:text-center transition-opacity duration-1000 max-sm:hidden`}>
            {t('art.h2')}
          </h1>
          <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12" ref={cardRef}>
            {variablePosts.map((post, index) => (
                <Transition key={post.id} in={cardInView} timeout={300 * index}>
                  {(state) => (
                    <Card
                      key={post.id}
                      title={post.title}
                      desc={post.desc}
                      date={post.date}
                      image={post.image}
                      links={post.links}
                      className={`${
                        state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                      } transition-all duration-[1000ms] delay-700 ease-in-out`}
                    />
                  )}
                </Transition>
              ))}
            </div>
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        {/* <Image src={error} alt="under" className='w-[500px]'></Image> */}
        <h2 className="text-center font-semibold text-xl px-8 text-[#033C5A] mb-8">
          Join the newsletter to receive the latest updates in your inbox
        </h2>
        <div className="flex items-center rounded-2xl w-full max-w-lg px-8">
          <form
            action="https://gmail.us10.list-manage.com/subscribe/post?u=59112821948cbb4fe715f0ce6&amp;id=ed8385b4e8&amp;f_id=0017d4e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="w-full flex items-center"
            target="_blank"
          >
            <div className="flex-grow bg-[#023C5A] p-0.5 rounded-l-2xl">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Your email address"
                className="appearance-none w-full px-4 py-5 text-gray-900 rounded-l-2xl focus:outline-none border border-gray-300 placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              className=" min-w-1/4 px-4 bg-[#023C5A] text-white rounded-r-2xl py-[23px] font-semibold hover:bg-[#102936] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-300"
            >
              Subscribe
            </button>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_59112821948cbb4fe715f0ce6_ed8385b4e8"  value="" />
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
