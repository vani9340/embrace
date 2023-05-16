import img1 from './images8/1img.svg'
import img2 from './images8/2img.svg'
import img3 from './images8/3img.svg'
import left from './images8/left.svg'
import right from './images8/right.svg'

function Part8(){

    return(
<div class='pl-[6.9vw] h-[600px]'>
<div class='capitalize  flex justify-between items-center'>
<div>
    <h1 class='text-[2.5rem] font-semibold mt-[78px]'>What Our Client Said about us</h1>
    <p class='mt-[9px]'>Use this section to describe your company </p>
</div>
<div>
 <button class="prev-button" className='rounded-full text-white bg-[#F8F9FF]  py-[27.84px] px-[25.7px] h-[85px] w-[85px]'><img src={left}/>
</button>
  <button class="next-button"  className='rounded-full text-black  bg-blue_l px-[25.7px]
 py-[27.84px]  h-[85px] w-[85px]'><img src={right}/>
</button>

</div>
</div>

<div class="container overflow-visible lg:flex lg:overflow-x-hidden py-0 mt-[53px] capitalize ">
  <div class="flex max-sm:justify-center max-sm:items-center">

    <div class="card bg-blue_l max-lg: max-md:max-w-[90%] max-w-[35%] flex-shrink-0 min-h-[296px] rounded-[30px] text-white">       
        <div class='pl-[2rem]'>
        <div class='flex items-center mt-[2.5rem]'>
       <div>
        <img src={img1}/>
        </div>
        <div class='ml-[20px]'>
        <h1 class='font-semibold text-[28px]'>Amelia Joseph</h1>
        <p>Chief Manager</p>
        </div>
        </div>
        <div>
        <p className='container w-[75%] pt-[19px]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        </div>  
        </div>
    </div>

    <div class="max-md:hidden bg-[#F8F9FF] flex-shrink-0  max-w-[35%] min-h-[296px] rounded-[30px] text-black ml-[20px]">       
    <div class='pl-[2rem]'>
    <div class='flex items-center mt-[2.5rem]' >
       <div>
        <img src={img2}/>
        </div>
        <div class='ml-[20px] '>
        <h1 class='font-semibold text-[28px]'>Jacob Joshua</h1>
        <p>Chief Manager</p>
        </div>
        </div>
        <div>
        <p className='container w-[75%] pt-[19px]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        </div>  
        </div>
    </div>
    <div class="max-lg:hidden bg-[#F8F9FF] flex-shrink-0 max-lg:max-w-[35%] min-h-[296px] rounded-[30px] text-black ml-[20px]">       
    <div class='pl-[2rem]'>
    <div class='flex items-center mt-[2.5rem]' >
       <div>
        <img src={img3}/>
        </div>
        <div class='ml-[20px] '>
        <h1 class='font-semibold text-[28px] '>Jacob Joshua</h1>
        <p>Chief Manager</p>
        </div>
        </div>
        <div>
        <p className='container w-[75%] pt-[19px]'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. </p>
        </div>  
        </div>
    </div>
    {/* <div class="card hover:bg-blue_l flex-shrink-0">Card 2</div>
    <div class="card hover:bg-blue_l flex-shrink-0">Card 3</div> */}
    {/* <div class="card hover:bg-blue_l flex-shrink-0">Card 4</div>
    <div class="card hover:bg-blue_l flex-shrink-0">Card 5</div>
    <div class="card hover:bg-blue_l flex-shrink-0">Card 1</div>
    <div class="card hover:bg-blue_l flex-shrink-0">Card 2</div>
    <div class="card hover:bg-blue_l flex-shrink-0">Card 3</div> */}
  </div>
</div>
</div>
    )
}

export default Part8
  