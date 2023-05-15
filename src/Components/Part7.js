 import img1 from './images7/img1.svg'
 import img2 from './images7/img2.svg'
 import img3 from './images7/img3.svg'
 import img4 from './images7/img4.svg'
 import img5 from './images7/img5.svg'
 import img6 from './images7/img6.svg'

function Part7(){
    return(
        <div class='h-[39.75rem] capitalize flex justify-between px-[6.9vw] items-center'>
        {/* img-section */}
            <div >
                <div class='flex'>
                    <img src={img1} />
                    <img src={img2} class='ml-[20px]'/>
                    <img src={img3} class='ml-[20px]'/>
                </div>
                <div class='flex mt-[18px]'>
                    <img src={img4}/>
                    <img src={img5} class='ml-[20px]'/>
                    <img src={img6} class='ml-[20px]'/>
                </div>
            </div>
            {/* text-section */}
            <div class='ml-[143px] w-[50%] '>
                <h1 className='font-semibold text-[2.5rem] leading-[3.4rem]'>Meet Our Team</h1>
                <h2 className='text-[2rem] font-normal text-[#00000099] mt-[12px] leading-[2.5rem]'>Use this section to describe your company and the </h2>
                <p class='w-[75%] text-[#00000099] mt-[1rem]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
                <button class='bg-blue_l font-medium leading-[2rem] text-white rounded-[4.3125rem] py-[1rem] px-[3rem] mt-[75px]'>Learn More</button>
            </div>
        </div>
    )
}
export default Part7