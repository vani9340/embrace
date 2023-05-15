import drink from './images5/drink.svg'
import laptop from './images5/laptop.svg'
import shoe from './images5/shoe.svg'
function Part5(){
    return(
        <div className="h-[53.75rem] px-[6.9vw] flex flex-col items-center pt-[79px] pb-[83px]">
        <h1 className='text-black text-[2.5rem] font-semibold '>Our Work</h1>
        <p class='text-[#00000099] w-[50%] text-center mt-[12px]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        <div class='flex justify-between mt-[50px]'>
            <div>
                <img src={laptop}/>
                <h1 class='text-center text-[1.125rem] text-black font-medium mt-[1rem]'>Apple</h1>
                <p class='text-[#00000099] text-center mt-[12px]'>Use this section to describe your </p>
            </div>
            <div class='ml-[20px]'>
                <img src={drink}/>
                <h1 class='text-center text-[1.125rem] text-black font-medium mt-[1rem]'>Coca-cola</h1>
                <p class='text-[#00000099] text-center mt-[12px]'>Use this section to describe your </p>
            </div>
            <div class='ml-[20px]'>
            <img src={shoe}/>
                <h1 class='text-center text-[1.125rem] text-black font-medium mt-[1rem]'>Nike</h1>
                <p class='text-[#00000099] text-center mt-[12px]'>Use this section to describe your </p>
            </div>
        </div>
        <button class='bg-blue_l rounded-[64px]  py-[1rem] px-[3rem] mt-[3rem] text-white'>See More</button>
        </div>
    )
}
export default Part5