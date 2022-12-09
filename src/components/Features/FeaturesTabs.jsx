import React,{useState} from 'react'
import FeaturesTab1 from '../Features/FeaturesTab1'
import FeaturesTab2 from '../Features/FeaturesTab2'
import FeaturesTab3 from '../Features/FeaturesTab3'

const FeaturesTabs = () => {
  const [currentTab, setcurrentTab] = useState('tab-a')
  
  return (
    <div>
        <div className='
        text-center px-0 scale-75
        2xs:px-8 2xs:scale-100
        lg:flex lg:justify-center
        hd:py-3
        '>
          <div className='
          border-y-2 border-gray-150
          lg:border-y-0 lg:border-b-2'>
            <button onClick={() => setcurrentTab('tab-a')} className={` ${
              currentTab === 'tab-a' 
              ? 'border-b-4 border-b-softRed text-black' 
              : '' } '
              2xs:text-sm xs:text-base 2xs:py-3 py-4 text-grayishBlue
              lg:text-xs lg:px-7
              xl:text-sm
              2xl:text-base
              hd:text-lg hd:px-12
              hover:text-softRed`}>
              Simple Bookmarking
            </button>
          </div>

          <div className='
          
          lg:border-y-0 lg:border-b-2'>
            <button onClick={() => setcurrentTab('tab-b')} className={` ${
              currentTab === 'tab-b' 
              ? 'border-b-4 border-b-softRed text-black' 
              : '' } '
              2xs:text-sm xs:text-base 2xs:py-3 py-4 text-grayishBlue
              lg:text-xs lg:px-7
              xl:text-sm
              2xl:text-base
              hd:text-lg hd:px-12
              hover:text-softRed`}>
              Speedy Search
            </button>
          </div>

          <div className='
          border-y-2 border-gray-150
          lg:border-y-0 lg:border-b-2'>
            <button onClick={() => setcurrentTab('tab-c')} className={` ${
              currentTab === 'tab-c' 
              ? 'border-b-4 border-b-softRed text-black' 
              : '' } '
              2xs:text-sm xs:text-base 2xs:py-3 py-4 text-grayishBlue
              lg:text-xs lg:px-7
              xl:text-sm
              2xl:text-base
              hd:text-lg hd:px-12
              hover:text-softRed`}>
              Easy Sharing
            </button>
          </div>
        </div>

      
      <div className={`${
        currentTab === 'tab-a' 
        ? 'translate-x-[0em] relative opacity-100'
        : 'opacity-0 translate-x-[-100em]'} transition-all ease-in-out duration-500 absolute`} >
        <FeaturesTab1/>
      </div>

      <div className={` ${
        currentTab === 'tab-b' 
        ? 'translate-x-[0em] relative opacity-100' 
        : 'opacity-0 translate-x-[-100em]'}  transition-all ease-in-out duration-500 absolute`} >
        <FeaturesTab2/>
      </div>

      <div className={` ${
        currentTab === 'tab-c' 
        ? 'translate-x-[0em] relative opacity-100' 
        : 'opacity-0 translate-x-[-100em]'}  transition-all ease-in-out duration-500 absolute`} >
        <FeaturesTab3/>
      </div>

    </div>
  )
}

export default FeaturesTabs