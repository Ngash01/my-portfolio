import "./Navbar.css";
import { Toggle } from "../Toggle/Toggle";
import {Link} from "react-scroll"

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Amos</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to={"Navbar"} smooth={"true"} activeClass={"activeClass"}>
            <li>Home</li>
            </Link>

            <Link spy={true} to={"Services"} smooth={"true"} >
            <li>Services</li>
            </Link>   
            <Link spy={true} to={"Experience"} smooth={"true"} >
            <li>Experience</li>            
            </Link> 
            <Link spy={true} to={"PortFolio"} smooth={"true"} >
            <li>PortFolio</li>            
            </Link>        
            <Link spy={true} to={"Prospects"} smooth={"true"} >
            <li>Prospects</li>            
            </Link>            
          </ul>
        </div>
        <Link spy={true} to={"Contact"}  >
            <button className='button n-button'>Contact</button>
            </Link>
      </div>
    </div>
  )
}
