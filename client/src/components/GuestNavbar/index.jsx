import Button from '../Button'
import Logo from '../Logo'

function GuestNavbar () {
  return (
    <nav className='min-w-full h-24  flex items-center justify-between px-5 md:px-10 lg:px-12 xl:px-16 absolute top-0 py--5'>
      <Logo />
      <ul className='flex gap-5'>
        <li className='inline-block'>
          <Button
            isLink
            className='opacity-80 px-4 py-2 text-sm font-medium text-neutral-100 bg-neutral-400 bg-opacity-30 hover:bg-opacity-40 hover:opacity-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ease-in-out duration-200 md:text-xl'
            to='/login'
          >
            Log In
          </Button>
        </li>
        <li className='inline-block'>
          <Button
            isLink
            className='opacity-80 px-4 py-2 text-sm font-medium text-neutral-100 bg-teal-400 bg-opacity-30 hover:bg-opacity-40 hover:opacity-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ease-in-out duration-200 md:text-xl'
            to='/signup'
          >
            Sign Up
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default GuestNavbar
