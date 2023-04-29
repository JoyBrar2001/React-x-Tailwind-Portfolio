import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';



const TechCard = (props) => {
  return (
      <div className='shadow-md shadow-[#040c16] p-4 hover:scale-110 transition-all duration-500 ease-in-out rounded-xl'>
        <img className='w-20 mx-auto' src={props.icon} alt="HTML Icon" />
        <p className='mt-4'>{props.title}</p>
      </div>
  );
}

const Skills = () => {

  const technologies = [
    {
      title: "HTML",
      icon: HTML,
    },
    {
      title: "CSS",
      icon: CSS,
    },
    {
      title: "JavaScript",
      icon: JavaScript,
    },
    {
      title: "React",
      icon: ReactImg,
    },
    {
      title: "Node",
      icon: Node,
    },
    {
      title: "FireBase",
      icon: FireBase,
    },
    {
      title: "Tailwind",
      icon: Tailwind,
    },
    {
      title: "Mongo",
      icon: Mongo,
    },
  ];

  return (
    <div id="skills" className='bg-[#0a182f] text-gray-300'>
      <div className='w-full h-full md:max-w-[700px] lg:max-w-[1000px] mx-auto justify-center flex flex-col p-4'>
        <div>
          <p className='text-4xl inline font-bold border-b-4 border-pink-600 '>Experience</p>
          <p className='py-4'>// These are the Technologies I've worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center py-4 gap-4'>
          
          {
            technologies.map((technology, index) => {
              return <TechCard title={technology.title} icon={technology.icon} />
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Skills
