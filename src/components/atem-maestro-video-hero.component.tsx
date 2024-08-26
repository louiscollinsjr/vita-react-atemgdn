import React from "react";
import { useEffect, useState, useRef } from 'react';

import atemMaestroMP4 from '../assets/atem-maestro.mp4';
import atemMaestroWBEM from '../assets/atem-maestro.webm';

const AtemMaestroVideoHero: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    //const [borderRadiusScroll, setBorderRadiusScroll] = useState(0); // Default radius
    const [borderRadiusResize, setBorderRadiusResize] = useState(0); // Default radius
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <=769 ) {
          setBorderRadiusResize(50);
        } else {
          setBorderRadiusResize(0);
        }
      };
  
      // Initial check
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      return () => {
        // Clean up event listener on component unmount
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const threshold = -130;
    // const videoElement = videoRef.current;
    // const rect = videoElement.getBoundingClientRect();
    // const videoTop = rect.top;
    const adjustedScrollY = Math.max(threshold + scrollY, 0);
    const borderRadius = Math.max(Math.min(Math.floor(adjustedScrollY / 10),50), borderRadiusResize); // max border-radius of 50px
    //const borderRadius = Math.min(50, 50);
    const width = 1920 - Math.min(Math.floor(adjustedScrollY / 1.5), 380); // reduce width by scrollY/2 up to 320px
  
    useEffect(() => {
      if (videoRef.current) {
        // Ensure the video element exists before applying styles
  
        videoRef.current.style.borderRadius = `${borderRadius}px`;
  
        videoRef.current.style.width = `${width}px`;
        //console.log(`Another width: ${width}px`);
      }
    }, [adjustedScrollY, borderRadius, width]);
  
    // console.log(
    //   `adjustedScrollY: ${adjustedScrollY} scrollY: ${scrollY} innerH: ${window.innerHeight} border radius: ${borderRadius} width: ${width} `
    // );
  
    const handlePausePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <section className="relative flex flex-col justify-center items-center w-full my-32">
       
       
        <div className="flex flex-row z-30 w-full max-w-[27.43rem] md:max-w-screen-2xl pb-12 bg-red">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-4">
            <div className="~text-xl/8xl items-center px-10">
              <h1 className="font-non.geist ~text-[4rem]/[6rem] font-medium text-black md:items-center invisible md:visible">
                atem
              </h1>
            </div>
            <div className="flex ~text-xl/9xl items-center bg-green md:content-end md:justify-end px-10">
              <div className='pt-4'>
                <p className=" text-black ~text-2xl/3xl font-medium tracking-wide md:items-center">
                <span className="text-slate-800 text-xs">Introducing</span><br/>
                  Maestro,
                  <br />
                  <span className="text-slate-800">Simplify automation.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className={`relative flex justify-center items-center w-full min-h-[60rem]  max-w-[27.47rem] md:max-w-[120rem]`}>
        
          <video
            ref={videoRef}
            className={`transition-all duration-500 absolute justify-center h-full max-w-[27.47rem] md:max-w-[120rem] items-center object-cover
            `}
            style={
              {
                // borderRadius: `${borderRadius}px`,
                // width: `${width}px`,
              }
            }
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline
          >
             <source src={atemMaestroMP4} type="video/mp4" />
            <source src={atemMaestroWBEM} type="video/webm"></source>
            Your browser does not support the video tag.
          </video>
  
          <div className="absolute bottom-2 m-2">
            <button
              className="bg-black bg-opacity-50 text-white px-2 py-2 rounded-full shadow "
              onClick={handlePausePlay}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
         
        </div>
      </section>
    );

}

export default AtemMaestroVideoHero;