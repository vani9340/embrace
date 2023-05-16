import plus from './images8/plus.svg'
import faq from './images8/faq.svg'
function Part10(){
    return(
        <>
            <div class=' lg:flex lg:justify-between  lg:gap-[18rem]   items-center px-[6.9vw] min-h-[480px] capitalize'>
          <div class='lg:hidden'>
            <div class=' max-lg:mt-[8rem] max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                    <h1 class='font-semibold text-[2.5rem] leading-[56px] w-[50%] max-xl:w-full max-lg:text-center'>
                    How we can help you?
                    </h1>
                    <p className='mt-[1rem] max-w-[68%] text-[#00000099]'>Follow our newsletter. We will regulary update our latest project and availability.</p>
                    <div className="flex mt-[32px]">
            <input placeholder="Enter your Email " class="bg-[#FAFAFA]  py-[20px] px-[18px] rounded-full max-w-[18vw] min-h-[62px]"/>
            <button class="bg-blue_l ml-[12px] py-[20px] px-[24px] rounded-[70px] max-w-[114px] text-white">Lets Talk</button>
            </div>
                    <img src={faq} className='mt-[62px] max-lg:mb-[4rem]'/>
                </div>
                </div>
            {/* first section */}
                <div class='max-lg:w-[60%]'>
                    <div class='flex justify-between items-center h-[100px] w-[140%] border-y-[1px] border-[#00000033]'>How do i sign up for the project? <img src={plus}/></div>
                    <div class='flex justify-between items-center h-[100px] w-[140%] border-y-[1px] border-[#00000033]'>What thing that i should prepare before starting?<img src={plus}/></div>
                    <div class='flex justify-between  items-center w-[140%] h-[100px] border-y-[1px] border-[#00000033]'>Does my company need help for marketing advices? <img src={plus}/></div>
                </div>

                <div class='max-lg:hidden'>
                    <h1 class='font-semibold text-[2.5rem] leading-[56px] w-[50%] max-xl:w-full'>
                    How we can help you?
                    </h1>
                    <p className='mt-[1rem] max-w-[68%] text-[#00000099]'>Follow our newsletter. We will regulary update our latest project and availability.</p>
                    <div className="flex mt-[32px]">
            <input placeholder="Enter your Email " class="bg-[#FAFAFA]  py-[20px] px-[18px] rounded-full max-w-[18vw] min-h-[62px]"/>
            <button class="bg-blue_l ml-[12px] py-[20px] px-[24px] rounded-[70px] max-w-[114px] text-white">Lets Talk</button>
            </div>
                    <img src={faq} className='mt-[62px]'/>
                </div>
            </div>
        </>
    )
}
export default Part10