import React from 'react';
import '/src/Component/Hero.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div className="carousel w-full my-7">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="slide1 w-10/12 mx-auto bg-cover">
              <div className="p-10 lg:p-40">
                <p className='text-lg md:text-2xl lg:text-4xl font-semibold text-[#5CAF90]'>Starting From $20.00</p>
                <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold text-[#4B5966] my-5 md:mt-7 md:mb-10 lg:mb-20'>Organic & Healthy <br />Vegitable</h1>
                <button className='btn md:text-2xl md:py-8 rounded-xl bg-[#4B5966] text-white font-semibold px-5 flex items-center md:mb-10 lg:mb-0'>Shop Now <MdKeyboardDoubleArrowRight className='text-xl' /></button>
              </div>
            </div>
            <div className="absolute left-2 md:left-5 lg:left-15 right-2 md:right-5 lg:right-15 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <div className="slide2 w-10/12 mx-auto bg-cover">
              <div className="p-10 lg:p-40">
                <p className='text-lg md:text-2xl lg:text-4xl font-semibold text-[#5CAF90]'>Starting From $20.00</p>
                <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold text-[#4B5966] my-5 md:mt-7 md:mb-10 lg:mb-20'>Organic & Healthy <br />Vegitable</h1>
                <button className='btn md:text-2xl md:py-8 rounded-xl bg-[#4B5966] text-white font-semibold px-5 flex items-center md:mb-10 lg:mb-0'>Shop Now <MdKeyboardDoubleArrowRight className='text-xl' /></button>
              </div>
            </div>
            <div className="absolute left-2 md:left-5 lg:left-15 right-2 md:right-5 lg:right-15 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;