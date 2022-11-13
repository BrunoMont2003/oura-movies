import { Link } from 'react-router-dom'
import './style.css'
function Logo () {
  return (
    <div>
      <Link className='logo' to='/'>
        Oura
      </Link>
    </div>
  )
}

export default Logo
