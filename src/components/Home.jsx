import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className='bg-[#0a192f] w-full h-screen p-4' id='home'>
            <div className='w-full md:max-w-[700px] lg:max-w-[1000px] mx-auto py-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Joy Brar</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Fron End Developer, specializing in UI/UX design. Apart from the basics like HTML, CSS, I'm also familiar with Javascript up to a intermediate level, and I'm currently learning React, and Three js...</p>

                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 ease-in-out group'>
                        View Work
                        <span>
                            <HiArrowNarrowRight className='ml-3 transform group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Home;
