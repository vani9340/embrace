import img from './images6/img.svg'
function Part6(){
    return(
        <div class='h-[312px] bg-blue_l capitalize text-white px-[6.9vw] w-screen flex justify-between'>
        <div>
        <h1 class='text-[2.5rem] font-normal pt-[66px] w-[70%] leading-[3.5rem]'>start your journey with us now</h1>
        </div>
        <div class='w-[50%] '>
        <p class='text-[1.125rem] pt-[66px] '>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. Use this section to describe your company and the products you offer. You could share your company’s story and </p>
        <img src={img} className='mt-[26px]'/>
        </div>
        </div>
    )
}

export default Part6