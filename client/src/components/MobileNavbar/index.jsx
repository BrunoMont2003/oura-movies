import { useState } from 'react'
import MobileNavItem from '../MobileNavItem'
import Logo from '../Logo'
import MenuToggle from '../MenuBar'

function MobileNavbar ({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative bg-neutral-800 bg-opacity-40 md:hidden'>
      <nav className='min-w-full h-20  flex items-center justify-between px-5 border-b'>
        <Logo />
        <MenuToggle onToggle={() => setIsOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <div className='absolute top-20  min-w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
          <ul className='flex items-center flex-col text-5xl gap-12 font-light text-white'>
            {navItems.map((item, index) => (
              <li key={index}>
                <MobileNavItem to={item.link}>
                  {index === 2
                    ? (
                      <span className='mx-8'>Search</span>
                      )
                    : (
                        item.element
                      )}
                </MobileNavItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar
