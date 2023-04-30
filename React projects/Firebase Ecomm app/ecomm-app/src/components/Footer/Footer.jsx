import React from 'react'
import "./Footer.css";
import Wave from "../../img/wave.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: "100%"}}/>
      <div className="f-content">
        <span>kimaniamos82@gmail.com</span>
        <div className="f-icons">
          <InstagramIcon color='white' />
          <FacebookIcon color='white' />
          <GitHubIcon color='white' />
        </div>
      </div>
    </div>
  )
}
