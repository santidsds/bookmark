import React from 'react'
import heroImg from '../assets/illustration-hero.svg'

const Hero = () => {
  return (
    <div className='
         
         flex flex-col h-full font-Rubik mb-[150px]
         lg:flex-row-reverse lg:justify-center lg:items-start lg:mt-4
         xl:ml-5
         2xl:ml-10
         hd:ml-20 hd:mt-28 hd:gap-20 '>    
        <div className='
            mt-8 flex justify-center items-center
            lg:mt-0 
            2xl:mt-'>
            <img className=' 
                scale-90
                lg:w-[34em] lg:h-[24em] 
                xl:w-[45em] xl:h-[32em]
                2xl:w-[50em] 2xl:h-[34em]
                hd:w-[60em] hd:h-[40em] ' 
                src={heroImg}
            />
        </div>


        <div className=' 
            flex flex-col justify-center items-center gap-8 mt-8 
            lg:scale-75 lg:items-start lg:mt-9
            xl:scale-90 xl:mt-20
            2xl:scale-105 2xl:mt-32
            hd:scale-125'> 
            <h1 className='
                text-2xl text-center font-[500] max-w-[14em]
                2xs:text-3xl
                xs:text-4xl 
                md:text-5xl 
                lg:max-w-[10em] lg:text-start         '>
                A Simple Bookmark Manager
            </h1>
            <p className='
                text-xs text-grayishBlue max-w-[20em] text-center mb-3 
                2xs:text-sm
                xs:text-base 
                lg:max-w-[27em] lg:text-left'>
                A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className=' absolute mt-[20em] flex xs:flex-row xs:gap-5 xs:mr-[0] font-[500] justify-center'>
                <button className=' bg-softBlue text-white xs:mr-[0] mr-[-2em] scale-75 px-4 p-3 min-w-fit xs:scale-100 xs:px-5 xs:p=3 rounded-md lg:hover:bg-white lg:hover:border-2 lg:hover:border-softBlue lg:hover:text-softBlue lg:hover:scale-105 transition-all ease-in-out'>Get it on Chrome</button>
                <button className='bg-white text-grayishBlue  scale-75 p-3 px-4 min-w-fit xs:scale-100 xs:px-5 xs:p=3 rounded-md lg:hover:bg-white lg:hover:border-2 lg:hover:border-veryDarkBlue lg:hover:text-veryDarkBlue shadow-lg lg:hover:scale-105 transition-all ease-in-out'>Get it on Firefox</button>
            </div>
        </div>
    </div>
    
  )
}

export default Hero