import React from 'react'
import { Link } from 'react-router-dom'

function Button ({ isLink, color = 'neutral', children, ...props }) {
  return isLink
    ? (
      <Link {...props}>{children}</Link>
      )
    : (
      <button {...props}>{children}</button>
      )
}

export default Button
