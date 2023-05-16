import img from './images6/img.svg'
function Part6(){
    return(
        <div class='min-h-[312px] bg-blue_l capitalize text-white px-[6.9vw] w-screen sm:flex sm:justify-between max-sm:flex max-sm:flex-col max-sm:items-center'>
        <div>
        <h1 class='text-[2.5rem] font-normal pt-[66px] max-sm:pt-[40px]  max-sm:font-medium max-w-[70%] leading-[3.5rem] max-md:text-[2rem] max-sm:text-center max-sm:px-[15%] max-sm:max-w-full'>start your journey with us now</h1>
        </div>
        <div class='w-[50%] max-sm:w-[75%]  '>
        <p class='text-[1.125rem] pt-[66px] max-lg:text-[1rem] max-md:text-[0.9rem]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. Use this section to describe your company and the products you offer. You could share your company’s story and </p>
        <img src={img} className='mt-[26px]'/>
        </div>
        </div>
    )
}

export default Part6