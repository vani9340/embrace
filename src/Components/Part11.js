import embrace from './images11/embrace.svg'
import   insta from './images11/insta.svg'
import  twitter from './images11/twitter.svg'
import facebook from './images11/facebok.svg'

function Part11(){
    return(
        <div class='capitalize '>
            <div class='max-916:flex max-916:flex-col 916:h-[392px] max-916:min-h-[392px] 916:flex justify-between items-center px-[6.9vw]'>
            {/* 1 section */}
                <div class='max-916:order-last max-916:mt-[4rem]'>
                <img src={embrace}/>
                <p class='mt-[19px] text-black font-medium text-[1rem] leading-[1.25rem]'>Los Angeles, California, USA</p>
                <div class='flex justify-start mt-[38px]'>
                    <img src={insta} className='mr-[20.33px]'/>
                    <img src={twitter}  className='mr-[20.33px]'/>
                    <img src={facebook}/>
                </div>
                <button class='text-white bg-blue_l px-[84px] py-[1rem] rounded-[69px] mt-[45.5px]'>Contact Us</button>
                </div>
            {/* 2 section */}
                <div class='flex max-916:mt-[4rem] gap-[75px] font-medium text-black max-sm:text-[0.8rem] xsm:text-[1rem] leading-[20px]'>
                <div class=' flex flex-col gap-[48px]'> 
                <h1>Work With Us</h1>
                <h1>Advertise With Us</h1>
                <h1>Support Us</h1>
                <h1>Business Advices</h1>   
                </div>
               
           
                <div class=' flex flex-col gap-[48px]'> 
                <h1>Private Coaching</h1>
                <h1>Our Work</h1>
                <h1>Our Commitment</h1>
                <h1>Our Team</h1>
                </div>
               
          
                <div class=' flex flex-col gap-[48px]'> 
                <h1>About Us</h1>
                <h1>FAQs</h1>
                <h1>Report a Bug</h1>
                </div>
         
              
                
         
               

                </div>
            </div>


            <footer class='min-h-[119px] max-916:min-h-[90px] bg-[#000000cc] text-white flex justify-between items-center  px-[6.9vw] max-sm:text-[0.8rem]'>
                <h1 >© 2022 Embrace, Inc. - All Rights Reserved</h1>
                <div class='flex gap-[125px]'>
                    <h1>Terms of use</h1>
                    <h1>Privacy policy </h1>
                </div>
            </footer>
        </div>
    )
}
export default Part11