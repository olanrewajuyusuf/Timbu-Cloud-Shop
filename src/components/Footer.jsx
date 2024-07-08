import { Link } from 'react-router-dom'
import Logo from '../assets/icons/Logo.png'
import x from '../assets/icons/x.png'
import facebook from '../assets/icons/facebook.png'
import google from '../assets/icons/google.png'

const Footer = () => {
  return (
    <>
    <div className='bg-[#4E4E4E] flex justify-start items-center md:gap-20 py-5 md:py-2'>
        <div>
            <img className='w-[100px] md:w-[250px]' src={Logo} alt="logo" />
        </div>
        <div className='flex md:flex-col justify-center items-center gap-10'>
            <ul className='text-white text-[12px] md:text-[24px] flex flex-col md:flex-row md:gap-16 gap-2'>
                <Link><li>What we do</li></Link>
                <Link><li>Our Work</li></Link>
                <Link><li>Company</li></Link>
                <Link><li>Contact</li></Link>
            </ul>
            <div className='flex justify-center items-center gap-3'>
                <Link>
                  <img className='w-6' src={x} alt="" />
                </Link>
                <Link>
                  <img className='w-6' src={facebook} alt="" />
                </Link>
                <Link>
                  <img className='w-6' src={google} alt="" />
                </Link>
            </div>
        </div>
    </div>
    <div className='bg-[#4E4E4E] text-center text-[12px] text-white py-5 border-t-[1px]'>
        <p>All rights reserved</p>
    </div>
    </>
  )
}

export default Footer