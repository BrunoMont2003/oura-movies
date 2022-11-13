import Button from '../Button'
import Logo from '../Logo'

function GuestNavbar () {
  return (
    <nav className='min-w-full h-24  flex items-center justify-between px-5 md:px-10 lg:px-12 xl:px-16 absolute top-0 py--5'>
      <Logo />
      <ul className='flex gap-5'>
        <li className='inline-block'>
          <Button isLink color='neutral' to='/login'>
            Log In
          </Button>
        </li>
        <li className='inline-block'>
          <Button isLink color='teal' to='/signup'>
            Sign Up
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default GuestNavbar
