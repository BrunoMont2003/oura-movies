import React from 'react'
import { Link } from 'react-router-dom'

function Button ({ isLink, color = 'neutral', children, ...props }) {
  const className = `opacity-80 px-4 py-2 text-sm font-medium text-neutral-100 bg-${color}-400 bg-opacity-30 hover:bg-opacity-40 hover:opacity-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ease-in-out duration-200 md:text-2xl ${props.className}`
  return isLink
    ? (
      <Link className={className} {...props}>
        {children}
      </Link>
      )
    : (
      <button className={className} {...props}>
        {children}
      </button>
      )
}

export default Button
