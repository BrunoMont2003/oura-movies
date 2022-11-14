import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Button ({ isLink, isNavLink, children, ...props }) {
  if (isLink) {
    return <Link {...props}>{children}</Link>
  }
  if (isNavLink) {
    return <NavLink {...props}>{children}</NavLink>
  }
  return <button {...props}>{children}</button>
}

export default Button
