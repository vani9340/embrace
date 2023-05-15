import build from './images4/build.svg' 
import dollar from './images4/dollar.svg' 
import idea from './images4/idea.svg' 
import perform from './images4/perform.svg' 
import speed from './images4/speed.svg' 
function Part4(){
    return(
        <div className='h-[48.5rem] capitalize flex px-[6.9vw] justify-between'>
            <div class='w-[31rem] '>
                <h1 class='font-semibold text-[2.5rem] leading-[54px] mt-[86px] mb-[12px]'>how it Works</h1>
                <p class='font-normal mb-[46px] text-[#00000099]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
                <img src={build} class='w-[31.625rem] h-[23.5rem]'/>
            </div>
            <div>
                <div>
                <div className='flex mt-[86px]'>
                <div class='w-[18.25rem]'>
                    <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={idea}/></div>
                    <h1 class='font-medium text-[1.75rem] leading-[2.365rem] mb-[16px]'>Ideation</h1>
                    <p class='font-normal text-[#00000099]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>
                <div  class='w-[18.25rem]'>
                     <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={dollar}/></div>
                    <h1 class='font-medium text-[1.75rem] leading-[2.365rem] mb-[16px]'>Budget</h1>
                    <p class='font-normal text-[#00000099]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>
                </div>

                <div className='flex mt-[80px]'>
                <div  class='w-[18.25rem]'>
                     <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={perform}/></div>
                    <h1 class='font-medium text-[1.75rem] leading-[2.365rem] mb-[16px]'>Perfomance</h1>
                    <p class='font-normal text-[#00000099]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
                </div>               
                <div  class='w-[18.25rem]'>
                     <div class='w-[6.375rem] h-[6.375rem] bg-blue_l rounded-[1.5rem] flex items-center justify-center mb-[24px]'><img src={speed}/></div>
                    <h1 class='font-medium text-[1.75rem] leading-[2.365rem] mb-[16px]'>Speed</h1>
                    <p class='font-normal text-[#00000099]'>Use this section to describe your company and the products you offer. You could share your company’s</p>
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