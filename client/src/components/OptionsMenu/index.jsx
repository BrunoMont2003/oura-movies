import './style.css'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { GearIcon, ExitIcon } from '@radix-ui/react-icons'
import { useAuthContext } from '../../contexts/AuthContext'

const OptionsMenu = () => {
  const { user, logoutUser } = useAuthContext()
  console.log(user)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='h-10 flex items-center rounded opacity-80 hover:opacity-100 duration-200 transition-all ease-in-out mx-4 focus:outline-none focus:ring-0'>
          <GearIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
          <DropdownMenu.Label className='DropdownMenuLabel'>
            Hello, {user?.name}
          </DropdownMenu.Label>
          <DropdownMenu.Separator className='DropdownMenuSeparator ' />
          <DropdownMenu.Item
            className='DropdownMenuItem'
            onClick={() => {
              logoutUser()
            }}
          >
            Log Out{' '}
            <div className='RightSlot'>
              <ExitIcon />
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className='DropdownMenuArrow' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default OptionsMenu
