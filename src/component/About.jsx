import React from 'react'
import image from '../assets/download.jpg'

const About = () => {
  return (
    <div className='text-white bg-blue-500 w-80'>


    <div >
      <img className='w-80' src={image} alt="" />
      <h1 className='text-3xl text-center font-medium'>SHELAH MARK</h1>
      <h3 className='text-2xl text-center mt-2'>Web Design</h3>
      <h4 className='text-2xl ml-2 mt-8'>TO</h4>
      <hr className=' w-72 ml-4 mt-2' />
     <p className='text-xl font-medium ml-2 mt-2'>The Director</p>
<p className='text-xl font-medium ml-2'> Systems Integration Services</p>
<p className='text-lg ml-2'>20022 Quail Rin Dr <br /> DUNNELLON, Florida.</p>
    </div>


    <div>
    <h4  className='text-2xl ml-2 mt-8'>CONTACT</h4>
    <hr className=' w-72 ml-4 mt-2' />
     <p className='text-gl ml-2  mt-2'><i class="ri-phone-line mr-2 "></i>DX+1135531603</p>
<p className='text-lg ml-2'><i class="ri-mail-line  mr-2"></i>jamesbrown@gmail.com</p>
<p className='text-lg ml-2'><i class="ri-map-pin-line  mr-2"></i>No 9 King Wood Street WD.</p>
    </div>

    <div>
    <h4  className='text-2xl ml-2 mt-8'>SOCIAL LINKS</h4>
    <hr className=' w-72 ml-4 mt-2' />
     <p className='text-lg ml-2  mt-2'><i class="ri-facebook-circle-line  mr-2"></i> https://www.facebook.com/</p>
<p className='text-lg ml-2'><i class="ri-twitter-line  mr-2"></i>https://www.twitter.com/</p>
<p className='text-lg ml-2 '><i class="ri-linkedin-box-line  mr-2 "></i>https://www.linkedIn.com/</p>
    </div>
    
</div>


  )
}

export default About
