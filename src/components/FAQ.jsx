import React, {useState} from 'react'
import downArrow from '../assets/icon-arrow.svg'
import upArrow from '../assets/icon-arrow-up.svg'

const FAQ = () => {
    const generateFAQ = (question, answer) => {
        const [isOpen, setIsOpen] = useState(false)
  
        return (
            <div>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${isOpen ? '' : 'border-b-[1px] border-b-gray-300'} flex justify-between align-center w-full py-3 cursor-pointer font-[500]`}>
                        <button className='lg:hover:text-softRed text-left'>{question}</button>
                        <img className='w-[17px] h-[10px] mt-[0.5em]' src={isOpen ? upArrow : downArrow} alt="" />
                    </div>
                    <div className={`${isOpen ? 'pt-5 pb-8 border-b-[1px] border-b-gray-300' : 'hidden'}`}>
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        )
    }
  
    return (
        <div className='h-full font-Rubik mb-[110px]
        '>
            <div className='flex flex-col items-center justify-center text-center gap-5 p-8'>
                <h1 className='
                text-xl font-[500]
                xs:text-2xl xs:max-w-xs
                sm:text-3xl
                lg:text-xl
                xl:text-2xl
                hd:text-3xl'>
                Frequently Asked Questions</h1>
                <p className='
                max-w-xs
                text-grayishBlue text-xs
                2xs:text-sm
                xs:text-base
                lg:text-sm lg:max-w-sm
                2xl:text-base 2xl:max-w-lg
                hd:text-lg
                '>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
  
            
            <div className='
                px-10
                lg:max-w-[35em] lg:mx-auto'>
                {generateFAQ('What is a Bookmark?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.')}
                {generateFAQ('How can I request a new browser?', 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.')}
                {generateFAQ('Is there a mobile app?', 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.')}
                {generateFAQ('What about other Chromium browsers?', 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.')}
                
                <button className='
                    block text-[13px] bg-softBlue text-white py-3 px-8 rounded-[7px] mt-10 mx-auto
                    
                    '>
                    More info
                </button>
            </div>
            
        </div>
    )            
}

export default FAQ