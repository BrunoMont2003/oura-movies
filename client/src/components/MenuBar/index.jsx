import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import * as Toggle from '@radix-ui/react-toggle'
import { useState } from 'react'
import './style.css'

const MenuToggle = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Toggle.Root
      className='menu-toggle'
      aria-label='Menu Toggle'
      onPressedChange={() => {
        onToggle()
        setIsOpen(!isOpen)
      }}
    >
      {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </Toggle.Root>
  )
}

export default MenuToggle
