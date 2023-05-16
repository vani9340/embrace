import img1 from './images8/Vector-1.svg'
import img2 from './images8/Vector.svg'
function Part9(){
    return(
        <>
            <div class='flex items-center  lg:min-h-[628px] h-[628px] px-[6.9vw] capitalize sm:h-[500px] max-sm:min-h-[500px]'>
            <div class='h-[75%] bg-[#232038] max-md:w-[80vw] max-md:h-[85%] w-[95vw]  rounded-[56px] max-sm:mt-[8rem]'>
                <div class='sm:flex sm:justify-between px-[7.29vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center' >
                <div class='sm:hidden max-sm:w-[30vw] max-sm:mt-[4rem] max-sm:h-[30vw] rounded-full bg-[#E0FF22] flex justify-center items-center'>
                        <img src={img1} class='w-[65px] max-lg:w-[5vw]'/>
                        <img src={img2} class='h-[81.04px] max-lg:h-[5vw]'/>
                    </div>
                    <div>
                        <h1 class='max-lg:text-[2rem] text-white font-medium lg:text-[3rem] max-sm:w-full w-[70%] mt-[65px]'>start your journey with us now</h1>
                        <button class='bg-blue_l max-xl:mt-6 mt-[139px] py-[1rem] px-[3rem] rounded-[4rem]' >Start Now</button>
                    </div>
                    <div class='max-sm:hidden max-lg:h-[30vw]  w-[352px] h-[25vw] mt-[52px] rounded-full bg-[#E0FF22] flex justify-center items-center'>
                        <img src={img1} class='w-[65px] max-lg:w-[5vw]'/>
                        <img src={img2} class='h-[81.04px] max-lg:h-[5vw]'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Part9