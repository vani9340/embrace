import embrace from './images/logo.svg'
import {Link,BrowserRouter} from 'react-router-dom'
function Nav(){
return(
    <>
        <div className='flex justify-between px-[6.9vw]'>
        <div className='flex  justify-between'>
            <div className='flex justify-evenly w-[144px] h-[32px] mt-[28px] mr-[88px]'>
                <img src={embrace}/>
            </div>
            
            <div className='flex py-[33px] font-medium'>
               <BrowserRouter>                    
                   <Link to="/" class='mr-[40px]'>How it Works</Link>
                  <Link to="#" class='mr-[40px]'>Our Work</Link>
                   <Link to="#" class='mr-[40px] '>Pricing</Link>
                    <Link to="#">About Us</Link>
                </BrowserRouter>
                </div>
          
            </div>
            <div>
                <button className='bg-[#3461FF] rounded-[70px] mt-[18px] py-[16px] px-[24px] text-white'>Try it Now</button>
            </div>
        </div>
    </>
)
}
export default Nav