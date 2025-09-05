import Image from 'next/image'
import Link from 'next/link'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
    <div className='w-full h-20 shadow-md '>
      <div className='flex justify-between items-center !mx-52 h-full'>
        {/* Left: Logo */}
        <div className='flex items-center'>
          <Image
            src='/images/navlgo.png'
            alt='Logo'
            width={155}
            height={50}
            className='transition-transform duration-400 ease-in-out hover:scale-105'
          />
        </div>

        {/* Right: Nav + Auth */}
        <div className='flex gap-12'>
          <NavbarLinks />

          {/* Login Button */}
          <Link
            href='/login'
            className='bg-[#322370] text-white border border-black rounded !px-4'
          >
            Login
          </Link>

          {/* Profile Icon */}
          <Link
            href='/'
            className='bg-[#322370] text-white w-[30px] h-[30px] flex justify-center items-center rounded-full '
          >
            U
          </Link>

          {/* Mobile Menu Toggle */}
          <div>
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
