import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' id='about'>
      <div className='flex flex-col justify-center items-center w-full h-full md:max-w-[700px] lg:max-w-[1000px] mx-auto'>
        <div className='max-w-[1000px] w-full grid gap-8 px-4 grid-cols-2'>
            <div className='sm:text-right pb-8 pl-4 col-span-2 sm:col-span-1'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>

            <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-4xl font-bold sm:text-right'>
                <p>Hi, I'm Joy, Nice to Meet you. Please take a look around</p>
            </div>
            <div>
                <p>I'm Passionate about building UI designs, websites, everything that basically involves frontend stuff. I love the Creative Field, and I've been a Graphic Designer for about 4 years, and a Video editor as well, for more or less. I do what I love, and I love what I do</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
