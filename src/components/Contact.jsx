import React, {useState} from 'react'
import error from '../assets/icon-error.svg'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [alert, showAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email.length<1 || !email.includes('@' && '.com') ){
      showAlert(true)
    }
  }

  return (

    <div className='w-full bg-softBlue font-Rubik text-white'>
        <div className='
        flex flex-col justify-center items-center py-14 pt-16
        
        '>
            <h3 className='
            text-[10px] tracking-[5px]
            lg:scale-110
            '>35.000+ ALREADY JOINED </h3>
            <h1 className='
            font-[500] text-xl max-w-[15em] text-center
            lg:text-3xl lg:mt-5
            '>Stay up-to-date with what we're doing</h1>

                <form className='
                flex flex-col mt-5 gap-3
                lg:flex-row lg:scale-110' onSubmit={handleSubmit}>
                  <div className={`${alert ? 'bg-softRed p-[2px] rounded-[4px]' : ''}`}>
                    <input onInput={() => showAlert(false)} onChange={e => setEmail(e.target.value)} className='w-[20em] px-5 rounded-[4px] h-[40px] text-xs text-black' type="text" placeholder='Enter your email address' />
                    <div className={`${alert ? 'block' : 'hidden' } bg-softRed h-5 rounded-[4px] px-2 flex items-center`}>
                      <p className='text-[0.6em] italic'>Whoops, make sure it's an email</p>
                      <img className='mt-[-3.5em] ml-[4em]' src={error} alt="" />
                    </div>
                  </div>
                  <button className='bg-softRed h-[40px] text-xs rounded-[4px] px-5'>Contact Us</button>

                  <div className='bg-greeb-500 h-5 rounded-[4px] px-2 flex items-center' >
                    <p>
                      
                    </p>
                  </div>
                </form>
                
            
        </div>

    </div>
  )
}

export default Contact