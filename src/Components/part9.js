import img1 from './images8/Vector-1.svg'
import img2 from './images8/Vector.svg'
function Part9(){
    return(
        <>
            <div class='flex items-center h-[628px] px-[6.9vw] capitalize'>
            <div class='h-[75%] bg-[#232038] w-[95vw]  rounded-[56px]'>
                <div class='flex justify-between px-[7.29vw]'>
                    <div>
                        <h1 class='text-white font-medium text-[3rem] w-[70%] mt-[65px]'>start your journey with us now</h1>
                        <button class='bg-blue_l mt-[139px] py-[1rem] px-[3rem] rounded-[4rem]' >Start Now</button>
                    </div>
                    <div class='w-[352px] h-[352px] mt-[52px] rounded-full bg-[#E0FF22] flex justify-center items-center'>
                        <img src={img1} class='w-[65px]'/>
                        <img src={img2} class='h-[81.04px]'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Part9