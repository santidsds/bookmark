import React from 'react'
import chrome from '../assets/logo-chrome.svg'
import firefox from '../assets/logo-firefox.svg'
import opera from '../assets/logo-opera.svg'
import bgDots from '../assets/bg-dots.svg'

const 
Download = () => {
  return (
    <div className='
        h-full min-h-[90vh] font-Rubik mb-[50px]
        lg:mb-0
    '>
        <div className='flex flex-col items-center justify-center text-center gap-5 p-8'>
            <h1 className='
            text-xl font-[500]
            xs:text-2xl
            sm:text-3xl
            lg:text-xl
            xl:text-2xl
            hd:text-3xl'>
            Download the extension</h1>
            <p className='
            text-grayishBlue text-xs
            2xs:text-sm
            xs:text-base
            lg:text-sm lg:max-w-sm
            2xl:text-base 2xl:max-w-lg
            hd:text-lg
            '>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
        <div className='
        lg:flex lg:w-fit lg:gap-8 mx-auto mt-5
        xl:scale-105
        2xl:scale-110
        hd:scale-125 hd:mt-16
        
        '>
            <div className='flex-col align-center text-center p-5 rounded-lg shadow-lg w-[14em] h-fit mx-auto'>
                <img className='mx-auto scale-75 p-2' src={chrome} alt="" />
                <h2 className='font-[500]'>Add to Chrome</h2>
                <p className='text-xs text-grayishBlue'>Minimum version 62</p>
                <img className=' scale-125 px-1 mt-6 mb-[-0.2em]' src={bgDots} alt="" />
                <button className='
                    text-[11px] bg-softBlue text-white py-2.5 px-8 rounded-[4px] mt-5 min-w-max
                    lg:block
                    2xl:text-[11px]
                  lg:hover:bg-white lg:hover:border-2 lg:hover:border-softBlue lg:hover:text-softBlue'>
                    Add & Install Extension
                </button>
            </div>
            <div className='flex-col align-center text-center p-5 rounded-lg shadow-lg mt-8 mb-8 w-[14em] h-fit mx-auto'>
                <img className='mx-auto scale-75 p-2' src={firefox} alt="" />
                <h2 className='font-[500]'>Add to Firefox</h2>
                <p className='text-xs text-grayishBlue'>Minimum version 45</p>
                <img className='mt-6 mb-[-0.2em]' src={bgDots} alt="" />
                <button className='
                    text-[11px] bg-softBlue text-white py-2.5 px-8 rounded-[4px] mt-5 min-w-max
                    lg:block
                    2xl:text-[11px]
                  lg:hover:bg-white lg:hover:border-2 lg:hover:border-softBlue lg:hover:text-softBlue'>
                    Add & Install Extension
                </button>
            </div>
            <div className='flex-col align-center text-center p-5 rounded-lg shadow-lg w-[14em] h-fit mt-[4em] mx-auto'>
                <img className='mx-auto scale-75 p-2' src={opera} alt="" />
                <h2 className='font-[500]'>Add to Opera</h2>
                <p className='text-xs text-grayishBlue'>Minimum version 56</p>
                <img className='mt-6 mb-[-0.2em]' src={bgDots} alt="" />
                <button className='
                    text-[11px] bg-softBlue text-white py-2.5 px-8 rounded-[4px] mt-5 min-w-max
                    lg:block
                    2xl:text-[11px]
                  lg:hover:bg-white lg:hover:border-2 lg:hover:border-softBlue lg:hover:text-softBlue'>
                    Add & Install Extension
                </button>
            </div>
        </div>
    </div>
  )
}

export default Download