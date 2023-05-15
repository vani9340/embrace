import './style.css'
import  img1 from './images/1.png'
import  img2 from './images/2.png'

import img4 from './images/4.png'
import img5 from './images/5.png'
// import img6 from './images/6.png'
// import img7 from './images/7.png'
import pencil from './images/pencil.png'
import crown from './images/crown.png'
import girl from './images/girl.png'
import union from './images/Union.png'
import union2 from './images/Union2.png'
import heart from './images/heart.png'
function Part1(){
    return(
        <>
<div class='flex px-[6.9vw] '>
        <div class='mt-[80px] mb-[40px]'>
            <div className="w-[498px] h-[360px] leading-[120px] "><h1 className="text-[5rem] font-semibold font-generalSans max-md:text-[3rem]">We Take <br/>
            Care Of <br/>
            Your Brand</h1></div><br/>
            <p className="container text-[16px] font-normal h-[96px] w-[413px] capitalize mt-[18px] mb-0 text-[#00000099]" >Use This Section To describe your company And The products You offer. You could share your company's story and details about why you are in business. </p>

            <div className="flex  mb-[96px] mt-[30px]">
            <input placeholder="Enter your Email " class="bg-[#FAFAFA]  py-[20px] px-[18px] rounded-full w-[18vw] h-[62px]"/>
            <button class="bg-blue_l ml-[12px] py-[20px] px-[24px] rounded-[70px] w-[114px] text-white">Lets Talk</button>
            </div>
        </div>
        {/* //img of part-1 */}
        <div class=' h-[800px] mt-[80px] mb-[40px]  absolute  right-10 '>
 
            <div class='flex'>
                <img src={img1}/>
                <img src={img2}/>
            </div>
            <div class='flex'>
            <div class='flex rounded-[119.5px] bg-blue_l h-[190px] w-[241px] items-center justify-center'> 
            <img src={pencil}/>
            </div>
            <img src={img4}/>
            </div>
            <div class='flex'>      
            <img src={img5}/>
            <div class='flex rounded-[119.5px] bg-[#E0FF22] w-[184px] h-[240px] items-center justify-center'> 
            <img src={girl}/>
            </div>

            <div class='flex rounded-[119.5px] bg-[#F1F4FF] w-[184px] h-[240px] items-center justify-center'> 
            <img src={crown}/>
            </div>

            </div>
        </div>
</div>
        </>
    )
}
export default Part1;