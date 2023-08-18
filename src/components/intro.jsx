import React from "react";
import { MapPin } from 'lucide-react';

const Intro = () => {
    return (
      <div className="text-[#f9fafb]">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* img */}
          <div className="flex items-center justify-center md:order-last md:flex-grow">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px] group">
              <img
                src="\Assets\WhatsApp Image 2023-08-18 at 13.08.35.jpg"
                alt="Hitesh"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-black group-hover:translate-x-2 group-hover:translate-y-2 duration-300 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: 'cover' }}
              ></img>
              <div className="absolute  h-[280px] w-[280px] durartion-400 border-8 border-transparent bg-[#374151] group-hover:bg-[#87CEEB] duration-300 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>
  
          {/* Content */}
          <div className="flex max-w-3xl flex-grow flex-col pl-4 pr-2 justify-center gap-8 md:order-first md:items-start md:justify-center md:pl-[6rem] lg:pl-[8rem] xl:pl-[10rem] 2xl:pl-[14rem] 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">
                Hi, I&apos;m Hitesh{' '}
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p>
               I'm a Flutter Developer specializing in React
               and Node.js. My expertise lies in creating 
               seamless web applications that prioritize user experience. 
               With a focus on dynamic frontend interfaces and efficient backend solutions, 
               I bring a balanced approach to development. Feel free to explore my portfolio. Let's make technology dance!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                {/* <img className="stroke-gray-600 w-[20px] bg-white" src="./Assets/location-dot-solid.svg" alt="map"/> */}
                <p>Andhra Pradesh, India</p>
              </div>
  
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p>Available for new projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Intro;