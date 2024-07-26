import logo from '../assets/deepthoughtlogo.svg'
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoEllipsisVerticalSharp } from "react-icons/io5"
function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt='Deep-thoughtLogo'/>
        </div>
        <div className="nav-links">
            <ul>
                <li><a className='nav-link' href="#"><IoHomeOutline/></a></li>
                <li><a className='nav-link' href="#"><IoSettingsOutline/></a></li>
                <li><a className='nav-link' href="#"><GoBell/></a></li>
                <li><a className='nav-link' href="#"><GoBell/></a></li>
                <li><a className='nav-link-dots' href="#"><IoEllipsisVerticalSharp size={20}/></a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
