import React from 'react'
import logo from '../assets/logo-bookmark-white.svg'
import fb from '../assets/icon-facebook.svg'
import tw from '../assets/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='w-full bg-veryDarkBlue flex flex-col items-center
    lg:justify-between lg:px-28 lg:flex-row'>
      <div className='
      py-12 px-8 justify-center items-center
      lg:flex lg:justify-between lg:px-10 lg:gap-10 lg:py-8
      '>
        <img className='mx-auto ml-[-1em] h-[27px] lg:h-[20px]' src={logo} alt="" />
        <div className='
        text-white flex flex-col gap-5 mt-8
        lg:flex-row lg:mt-0 lg:text-xs
        '>
          <button className='lg:hover:text-softRed tracking-[3.5px]'>FEATURES</button>
          <button className='lg:hover:text-softRed tracking-[3.5px]'>PRICING</button>
          <button className='lg:hover:text-softRed tracking-[3.5px]'>CONTACT</button>
        </div>
      </div>
        <div className='
        pb-12 justify-center items-center flex gap-8
        lg:pb-0
        '>
          <img src={fb} alt="" />
          <img src={tw} alt="" />
        </div>

      
        
    </div>
  )
}

export default Footer