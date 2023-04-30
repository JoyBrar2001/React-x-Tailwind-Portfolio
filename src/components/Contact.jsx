import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div>
            <p className='heading-outline text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - joybrar2001@gmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Your Message Here...'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center transition-all duration-300 ease-in-out'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
