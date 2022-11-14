import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import * as Toggle from '@radix-ui/react-toggle'
import { useState } from 'react'

const LikeButton = ({ onToggle = () => {} }) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <Toggle.Root
      className='p-3  bg-red-800 rounded cursor-pointer'
      aria-label='Like Toggle'
      onPressedChange={() => {
        onToggle()
        setIsLiked(!isLiked)
      }}
    >
      {isLiked ? <HeartFilledIcon /> : <HeartIcon />}
    </Toggle.Root>
  )
}

export default LikeButton
