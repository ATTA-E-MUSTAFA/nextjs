"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {

  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden' id='about'>
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
        <Image
            alt='about image'
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src= "/images/mineprof.jpg" 
            width={350}
          />

          <div className='text-lg mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'>
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]'>
              Sharun kaur
            </p>
            {/* Profile Name */}
            <p className='text-center md:text-left text-red-600 mt-1'>
              Computer programmer
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]'>
                  tronto,canada
                </p>
              </div>
              {/* Age */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Age
                  </p>
                  <p>
                    <IoPerson />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  21
                </p>
              </div>
              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  1 Year
                </p>
              </div>
              {/* Projects */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  3
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-gray-600 dark:text-gray-300'>
              A friendly girl with excellent communication skills and interactive behaviour. My leadership qualities always give an edge to my personality. A hardworking person who has a passion for coding and Artificial Intelligence. Present date pursuing Computer Programming(Co-op)at Georgian@ILAC,Toronto. To excel in my career,i learnt java,c++,python and excelled with a certificate of Credit.
I always try to explore new things and try to put all my skills and problem sloving abilities in whatever task i am assigned to. 
I am seeking an opportunity to work with a company and be a useful a resource for it. Hope for good correspondence LinkedIn !!
                </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;