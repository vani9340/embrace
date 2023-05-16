import build from './images4/build.svg' 
import dollar from './images4/dollar.svg' 
import idea from './images4/idea.svg' 
import perform from './images4/perform.svg' 
import speed from './images4/speed.svg' 
function Part4(){
    return(
        <div className='min-h-[48.5rem] capitalize xl:flex px-[6.9vw] justify-between'>
            <div class='max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center'>
                <h1 class='font-semibold text-[2.5rem] leading-[54px] mt-[86px] mb-[12px]'>how it Works</h1>
                <p class='font-normal mb-[46px] max-w-[50%] text-[#00000099] max-xl:text-center max-xl:max-w-[60%] max-md:max-w[85%] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
                <img src={build}/>
            </div>
            <div>
                <div>
                <div className='flex mt-[86px] max-xl:justify-center '>
                <div class='max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center'>
                    <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={idea}/></div>
                    <h1 class='font-medium text-[1.75rem] max-sm:text-[1.5rem] leading-[2.365rem] mb-[16px]'>Ideation</h1>
                    <p class='font-normal text-[#00000099] max-xl:max-w-[60%] xl:max-w-[80%] max-md:max-w[85%] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>
                <div class='max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center'>
                     <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={dollar}/></div>
                    <h1 class='font-medium text-[1.75rem] max-sm:text-[1.5rem]  leading-[2.365rem] mb-[16px]'>Budget</h1>
                    <p class='font-normal text-[#00000099] max-xl:max-w-[60%] xl:max-w-[80%] max-md:max-w[85%] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>
                </div>

                <div className='flex mt-[80px] max-xl:justify-center max-xl:items-center'>
                <div class='max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center'>
                     <div class='w-[6.375rem] min-h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={perform}/></div>
                    <h1 class='font-medium text-[1.75rem] max-sm:text-[1.5rem]  leading-[2.365rem] mb-[16px]'>Perfomance</h1>
                    <p class='font-normal text-[#00000099] max-xl:max-w-[60%] xl:max-w-[80%] max-md:max-w[85%] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>               
                <div class='max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center'>
                     <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={speed}/></div>
                    <h1 class='font-medium text-[1.75rem] max-sm:text-[1.5rem]  leading-[2.365rem] mb-[16px]'>Speed</h1>
                    <p class='font-normal text-[#00000099] max-xl:max-w-[60%] xl:max-w-[80%] max-md:max-w[85%] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>
                </div>
                </div>
               
                <div>
                <div></div>
                <div></div>
                </div>
            </div>
        </div>
    )
}

export default Part4