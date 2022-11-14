import { Link } from 'react-router-dom'

function MobileNavItem ({ text, className, to, ...props }) {
  return (
    <Link
      to={to}
      className={`text-white text-opacity-80 text-5xl lg:text-2xl font-light hover:text-opacity-100 hover:shadow-2xl ${className}`}
      {...props}
    >
      {props.children}
    </Link>
  )
}

export default MobileNavItem
