import React from 'react'
import illustration from '../../assets/illustration-features-tab-2.svg'

const FeaturesTab2 = () => {
  return (
    <div className={`
    w-full flex flex-col justify-center mt-10 mb-10 transition-all ease-in-out 
    lg:flex-row lg:mt-5
    hd:mt-10
     `}>
      <div className='flex justify-center'>
        <img className='
        scale-75
        sm:max-w-[50em]
        lg:max-w-[25em]
        xl:max-w-[28em]
        hd:scale-90 hd:max-w-[50em] hd:mr-12
        ' src={illustration} alt="" />
      </div>

      <div className='
      -z-10 absolute left-0 bg-softBlue w-[75vw] h-[120px] rounded-full mt-[-5em]
      xs:h-[180px] xs:mt-[-3em]
      2sm:h-[250px]
      md:md:w-[60vw] md:h-[35vh]
      lg:mt-[5em] lg:w-[40vw] lg:h-[35vh]
      '>
        <div className='
        left-0 bg-softBlue w-[35vw] h-[120px]
        xs:h-[180px] 
        2sm:h-[250px]
        md:h-[35vh]
        lg:w-[20vw] lg:h-[35vh]'>

        </div>
      </div>

      <div className='
      text-center mt-10 
      2xs:px-8
      lg:text-left '>
        <h2 className='
        text-xl font-[500]
        xl:text-2xl
        hd:text-3xl'>Intelligent search</h2>
        <p className='
        text-grayishBlue text-xs mt-3
        2xs:text-sm
        xs:text-base
        lg:text-sm lg:max-w-xs
        2xl:text-base 2xl:max-w-[25em]
        hd:text-lg
        '>
          Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
          </p>
        <button className='
        hidden text-[11px] bg-softBlue text-white p-2 px-4 rounded-[7px] mt-5
        lg:block
        2xl:text-[15px]'>
          More info
        </button>
      </div>
    </div>
  )
}

export default FeaturesTab2