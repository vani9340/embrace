 import img1 from './images7/img1.svg'
 import img2 from './images7/img2.svg'
 import img3 from './images7/img3.svg'
 import img4 from './images7/img4.svg'
 import img5 from './images7/img5.svg'
 import img6 from './images7/img6.svg'

function Part7(){
    return(
        <div class='min-h-[39.75rem] capitalize max-xl:flex max-xl:flex-col max-xl:justify-center items-center max-xl:mt-4 xl:flex xl:justify-between px-[6.9vw] xl:items-center'>
        {/* img-section */}
            <div class='max-xl:mb-[4rem]'>
                <div class='flex'>
                    <img src={img1} class=' max-sm:w-[30%]' />
                    <img src={img2} class='ml-[20px] max-sm:w-[30%] max-sm:ml-[10px]'/>
                    <img src={img3} class='ml-[20px] max-sm:w-[30%] max-sm:ml-[10px]'/>
                </div>
                <div class='flex mt-[18px]'>
                    <img src={img4} class=' max-sm:w-[30%]'/>
                    <img src={img5} class='ml-[20px] max-sm:w-[30%] max-sm:ml-[10px]'/>
                    <img src={img6} class='ml-[20px] max-sm:w-[30%] max-sm:ml-[10px]'/>
                </div>
            </div>
            {/* text-section */}
            <div class='ml-[143px] w-[50%] max-xl:ml-0 max-xl:text-center'>
                <h1 className='font-semibold text-[2.5rem] leading-[3.4rem] '>Meet Our Team</h1>
                <h2 className='xl:text-[2rem] font-normal text-[#00000099] mt-[12px] leading-[2.5rem] md:text-[1.5rem] max-md:text-[1.5rem]'>Use this section to describe your company and the </h2>
                <p class='xl:w-[75%] text-[#00000099] mt-[1rem] max-xl:mx-[10%]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
                <button class='bg-blue_l font-medium leading-[2rem] text-white rounded-[4.3125rem] py-[1rem] px-[3rem] mt-[75px] max-md:py-[0.5rem]  max-md:px-[1.5rem] max-md:mt-[3rem]'>Learn More</button>
            </div>
        </div>
    )
}
export default Part7