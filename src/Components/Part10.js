import plus from './images8/plus.svg'
import faq from './images8/faq.svg'
function Part10(){
    return(
        <>
            <div class='flex justify-between items-center px-[6.9vw] h-[480px] capitalize'>
            {/* first section */}
                <div>
                    <div class='flex justify-between items-center h-[100px] w-[140%] border-y-[1px] border-[#00000033]'>How do i sign up for the project? <img src={plus}/></div>
                    <div class='flex justify-between items-center h-[100px] w-[140%] border-y-[1px] border-[#00000033]'>What thing that i should prepare before starting?<img src={plus}/></div>
                    <div class='flex justify-between  items-center w-[140%] h-[100px] border-y-[1px] border-[#00000033]'>Does my company need help for marketing advices? <img src={plus}/></div>
                </div>

                <div>
                    <h1 class='font-semibold text-[2.5rem] leading-[56px]'>
                    How we can help you?
                    </h1>
                    <p className='mt-[1rem] w-[68%] text-[#00000099]'>Follow our newsletter. We will regulary update our latest project and availability.</p>
                    <div className="flex mt-[32px]">
            <input placeholder="Enter your Email " class="bg-[#FAFAFA]  py-[20px] px-[18px] rounded-full w-[18vw] h-[62px]"/>
            <button class="bg-blue_l ml-[12px] py-[20px] px-[24px] rounded-[70px] w-[114px] text-white">Lets Talk</button>
            </div>
                    <img src={faq} className='mt-[62px]'/>
                </div>
            </div>
        </>
    )
}
export default Part10