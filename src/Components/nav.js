import embrace from './images/logo.svg'
import {Link,BrowserRouter} from 'react-router-dom'
import { MenuIcon } from '@heroicons/react/outline';

function Nav(){
return(
    <>
        <div className='flex justify-between px-[6.9vw]'>
        <div className='flex  justify-between'>
         
                <img src={embrace} className= 'flex justify-evenly max-sm:w-[8rem] max-w-[144px] min-h-[32px] max-sm:mt-2 max-xsm:'/>
           
            
            <div className='flex py-[33px] font-medium ml-[5.5rem] max-lg:hidden'>
               <BrowserRouter>                    
                   <Link to="/" class='mr-[40px]'>How it Works</Link>
                  <Link to="#" class='mr-[40px]'>Our Work</Link>
                   <Link to="#" class='mr-[40px]'>Pricing</Link>
                    <Link to="#">About Us</Link>
                </BrowserRouter>
                </div>
            
            </div>
            <div class='flex gap-[5vw]'>
            <MenuIcon class='h-[2.5rem] max-w-[1.5rem] mt-[1.5rem] lg:hidden'/>
                <button className='bg-[#3461FF] rounded-[70px] mt-[18px]  py-[1rem] px-[1.5rem] text-white'>Try it Now</button>
            </div>
        </div>
    </>
)
}
export default Nav