import { useState } from 'react'
import MobileNavItem from '../MobileNavItem'
import Logo from '../Logo'
import MenuToggle from '../MenuBar'

function MobileNavbar ({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative bg-transparent md:hidden z-10'>
      <nav className={`min-w-full h-20 absolute  flex items-center justify-between px-5 border-b ${isOpen ? 'bg-neutral-800' : ''}`}>
        <Logo />
        <MenuToggle onToggle={() => setIsOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <div className='absolute top-20  min-w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-neutral-800'>
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
