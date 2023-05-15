import learn from './images2/learn.svg'
function Part3(){
return(
   <>
    <div className="h-[32.5rem] flex capitalize items-center px-[6.9vw]">
    <div className="">
        <div  className="flex">
        <div>
        <h1 className="text-[4rem] font-semibold">245%</h1>
        <p className="box-border w-[9.6875rem] text-[#00000099]">More revenues for the brand</p>
        </div>
        <div className="ml-[8.5rem]">
       <h1 className="text-[4rem] font-semibold">130K+</h1>
        <p className="w-[9.6875rem] text-[#00000099]">Audiences reached across platfrom</p>
        </div>
        </div>

        <div className="flex mt-[2.5rem]">
        <div >
        <h1 className="text-[4rem] font-semibold">50+</h1>
        <p className="box-border w-[9.6875rem] text-[#00000099]">brands work with us</p>
        </div>
        <div className="pl-[11rem]">
       <h1 className="text-[4rem] font-semibold">24+</h1>
        <p className="w-[9.6875rem] text-[#00000099]">Use this section to describe your </p>
        </div>
        </div>
    </div>

    <div class='pl-[8.8vw]'>
        <h1 class='font-semibold text-[2.5rem]'>Our Commitments</h1>
        <p class='text-[#00000099] font-[1.125rem] w-[95%] mt-[12px]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        <img src={learn} className='mt-[50px]'/>
    </div>
    </div>
   </> 
)
}
export default Part3