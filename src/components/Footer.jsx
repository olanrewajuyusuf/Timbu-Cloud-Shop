import footer from '../assets/icons/footer.png'

const Footer = () => {
  return (
    <>
    <div className='bg-[#4E4E4E] flex justify-center items-center pt-20 pb-10'>
        <img className='w-[90px] md:w-[160px]' src={footer} alt="logo" />
    </div>
    <div className='bg-[#4E4E4E] text-center text-[12px] text-white py-5 border-t-[1px]'>
        <p>All rights reserved</p>
    </div>
    </>
  )
}

export default Footer