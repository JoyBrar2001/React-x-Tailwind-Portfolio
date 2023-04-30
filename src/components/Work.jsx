import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import RealEstateImg from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div className='bg-[#0a192f] w-full h-full text-gray-300' id='work'>
        <div className='md:max-w-[700px] lg:max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4'>
            <div className='pb-8'>
                <p className='heading-outline'>Work</p>
                <p className='py-6'>// Check out some of my recent work!</p>
            </div>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 p-2 py-8 transition-all duration-300 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg m-3'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work
