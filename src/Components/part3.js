import learn from './images2/learn.svg'
function Part3(){
return(
   <>
    <div className="lg:flex  min-h-[32.5rem]  capitalize items-center px-[6.9vw] max-lg:mt-[4rem]">
    <div>
        <div  className="flex max-lg:justify-center">
        <div>
        <h1 className="text-[4rem] font-semibold sm:text-[3rem] max-sm:text-[2rem]">245%</h1>
        <p className="box-border max-w-[9.6875rem] text-[#00000099] max-sm:text-[0.9rem]">More revenues for the brand</p>
        </div>
        <div className="ml-[8.5rem]">
       <h1 className="text-[4rem] font-semibold sm:text-[3rem] max-sm:text-[2rem]">130K+</h1>
        <p className="max-w-[9.6875rem] text-[#00000099] max-sm:text-[0.9rem]">Audiences reached across platfrom</p>
        </div>
        </div>

        <div className="flex mt-[2.5rem] max-lg:justify-center ">
        <div>
        <h1 className="text-[4rem] font-semibold sm:text-[3rem] max-sm:text-[2rem]">50+</h1>
        <p className="box-border max-w-[9.6875rem] text-[#00000099] max-sm:text-[0.9rem]">brands work with us</p>
        </div>
        <div className="ml-[8.6rem]">
       <h1 className="text-[4rem] font-semibold sm:text-[3rem] max-sm:text-[2rem]">24+</h1>
        <p className="max-w-[9.6875rem] text-[#00000099] max-sm:text-[0.9rem]">Use this section to describe your </p>
        </div>
        </div>
    </div>

    <div class='pl-[8.8vw] max-lg:pl-0 max-lg:flex max-lg:flex-col max-lg:justify-center items-center max-lg:mt-[4rem]'>
        <h1 class='font-semibold  sm:text-[2rem] max-sm:text-[1.5rem]'>Our Commitments</h1>
        <p class='text-[#252525] max-md:text-[1rem] text-[1.125rem] max-w-[95%] max-lg:max-w-[50%] max-md:max-w-[75%] mt-[12px] max-sm:text-[0.8rem]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        <img src={learn} className='mt-[50px]'/>
    </div>
    </div>
   </> 
)
}
export default Part3