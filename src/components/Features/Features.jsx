import React from 'react'
import FeaturesTabs from './FeaturesTabs'


const Features = () => {
  return (
    <div className='
    h-full font-Rubik min-h-[90vh] 
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
          Features</h1>
        <p className='
        text-grayishBlue text-xs
        2xs:text-sm
        xs:text-base
        lg:text-sm lg:max-w-sm
        2xl:text-base 2xl:max-w-lg
        hd:text-lg
        '>Our aim is to make t quick and easy or you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go</p>
      </div>

      <div>
        <FeaturesTabs/>
      </div>

    </div>
  )
}

export default Features