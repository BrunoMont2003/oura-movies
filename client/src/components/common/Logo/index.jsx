import { Link } from 'react-router-dom'
import './style.css'
function Logo ({ className }) {
  return (
    <div className={className}>
      <Link className='logo' to='/'>
        Oura
      </Link>
    </div>
  )
}

export default Logo
