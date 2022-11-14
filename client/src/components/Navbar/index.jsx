import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Button from '../Button'
import Logo from '../Logo'
import OptionsMenu from '../OptionsMenu'
import MobileNavbar from '../MobileNavbar'
const NavItems = [
  {
    element: <span className='mx-8'>Home</span>,
    link: '/'
  },
  {
    element: <span className='mx-8'>Favorites</span>,
    link: '/favorites'
  },
  {
    element: <MagnifyingGlassIcon className='mx-4' />,
    link: '/search'
  }
]

function Navbar () {
  return (
    <>
      <div className='hidden h-24 absolute top-0 w-full md:flex items-center lg:justify-center justify-around'>
        <Logo className='lg:absolute top-2 left-16' />
        <nav className='bg-neutral-900 bg-opacity-70 rounded h-10 flex items-center justify-center'>
          <ul className='flex font-bold  lg:gap-12'>
            {NavItems.map((item, index) => (
              <li key={index}>
                <Button
                  isNavLink
                  to={item.link}
                  className={({ isActive }) =>
                    (isActive ? 'bg-neutral-300 opacity-100' : 'text-white') +
                    ' text-black h-10 flex items-center rounded opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out'}
                >
                  {item.element}
                </Button>
              </li>
            ))}
            <li>
              <OptionsMenu />
            </li>
          </ul>
        </nav>
      </div>
      <MobileNavbar navItems={NavItems} />
    </>
  )
}

export default Navbar
