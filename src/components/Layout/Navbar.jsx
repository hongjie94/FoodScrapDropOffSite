import { TiHomeOutline } from 'react-icons/ti';
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const locationPath = useLocation().pathname;
 
  const activeLinkCss = "text-[#795548] font-medium"
  const linkCss = "text-gray-500 hover:text-[#795548] font-medium"
  return (
    
    <nav>
      <div className="mx-auto">
        <div className="flex items-center h-16">
          {/* Home Icon */}
          <TiHomeOutline className="text-[#795548] text-2xl mr-2 mb-1" />

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className={locationPath === "/" ? activeLinkCss : linkCss}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={locationPath === "/about" ? activeLinkCss : linkCss}>About</Link>
            </li>
            <li>
              <Link to="/location" className={locationPath === "/location" ? activeLinkCss : linkCss}>Location</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar