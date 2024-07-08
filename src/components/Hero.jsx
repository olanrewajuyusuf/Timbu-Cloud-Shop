import hero from '../assets/images/desktop/hero.png'
import hero2 from '../assets/images/mobile/hero.png'

const Hero = () => {
  return (
    <div className='md:px-10 relative mt-[11vh] md:mt-[14vh]'>
        <div>
          <img className='w-full h-auto object-cover md:hidden' src={hero} alt="hero" />
          <img className='hidden w-full h-auto md:block' src={hero2} alt="hero" />
        </div>

        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-black'>
            <h1 className='font-[600] sm:font-[800] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[64px] mt-12 mb-6 lg:my-24'>Bridal Headgears</h1>
            <h2 className='border-b-2 border-black font-bold md:font-[800] text-[16px] sm:text-[20px] md:text-[32px] ml-[100px] md:ml-[300px] lg:ml-[400px]'>SHOP THE DROP</h2>
        </div>
        <div className='absolute left-0 bottom-[10%] w-full flex justify-center items-center gap-2'>
          <div className='w-2 h-2 bg-[#A0A0A0] rounded-full'></div>
          <div className='w-[18px] h-2 bg-white rounded-full'></div>
          <div className='w-2 h-2 bg-[#A0A0A0] rounded-full'></div>
        </div>
    </div>
  )
}

export default Hero