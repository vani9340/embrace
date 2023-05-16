import adobe from './images2/adobe.svg'
import amazon from './images2/amazon.svg'
import evernote from './images2/evernote.svg'
import google from './images2/google.svg'
import paypal from './images2/paypal.svg'
import shopify from './images2/shopify.svg'
import spotify from './images2/spotify.svg'
import uber from './images2/uber.svg'
import Microsoft from './images2/microsoft.svg'
import asana from './images2/asana.svg'
function Part2(){
return(

        <div className="bg-[#FAFAFA] min-w-screen min-h-[552px] capitalize items-center px-[6.9vw]">
        <div class='flex max-xsm:flex-none'>
            <h1 class='font-semibold text-[2rem] sm:text-[2.5rem] leading-[3.75rem] min-h-[6.75rem] max-w-[17.5rem] mt-[4.875rem]'>Companies <br/>
            we Work with</h1>
            <p class=' text-[0.8rem] sm:text-[1rem] leading-[1.75rem] pt-[5.625rem] lg:max-w-[32%] max-md:min-w-[32%] max-lg:max-w-[50%] pl-[36px] text-[#252525]'>Use this section to describe your company and the products you offer. You could share your company's story and details about why you are in business. </p>
        </div>
        <div class='mt-[6.3125rem] max-lg:flex max-lg:justify-evenly max-lg:gap-4'>
        <div class='flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6'>
        <img src={spotify}/> 
        <img src={google}/> 
        <img src={uber}/> 
        <img src={Microsoft}/>
        <img src={shopify}/>
        </div>
        <div class='flex justify-between  max-lg:flex-col max-lg:items-center lg:mt-[104px] '>
        <img src={evernote}/> 
        <img src={adobe}/> 
        <img src={paypal}/> 
        <img src={amazon}/>
        <img src={asana}/>
        </div>
     
        </div>
        </div>
  
)
}
export default Part2