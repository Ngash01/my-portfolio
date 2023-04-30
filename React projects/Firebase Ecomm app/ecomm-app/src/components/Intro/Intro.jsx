import "./Intro.css";
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import picture_4 from "../../img/picture_4.jpg"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import Resume from "./Kimani-amos-resume.pdf";
import {motion} from "framer-motion";

export const Intro = () => {

  const transition = {duration: 2, type: 'spring'}
  
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Amos Kimani</span>
          <span>Frontend Developer With a high level of Experince </span>
          <span>in web designing and development, producing the quality work</span>
        </div>
        <a href={Resume} download style={{textDecoration: "none"}}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/Ngash01" target="_blank"><img src={Github} alt="" /></a>
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>
      <div className="i-right">
        <img className="i-vector" src={Vector1} alt="" />
        <img className="i-vector" src={Vector2} alt="" />
        <img src={picture_4} alt="" />
        <motion.img 
         initial ={{left:"-36%"}} 
         whileInView={{left:"-24%"}}
         transition={transition}

        src={glassesimoji} alt="" />
        <motion.div 
        initial ={{top: "-4",left:"74%"}} 
        whileInView={{left:"68%"}}
        transition={transition}

        style={{top: "-4%", left:"68%" }}> 
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>
        <div className="passionate">
          <h2>Programmer</h2>
          <span>Passion</span>
          <span>For Tech</span>
        </div>
        
        <motion.div 
        initial ={{top: "21rem",left:"-12rem"}} 
        whileInView={{left:"-9rem", top: "25rem"}}
        transition={transition}
              
        style={{top:"25rem",left:"-10rem"}}>
          <FloatingDiv image={thumbup} txt1="Best Design" text2="Award"/>
        </motion.div>
        {/* blur */}
        <div className="blur" style={{background: "rgb(238 210 255)", objectFit:"cover"}}>
        </div>
        <div className="blur" style={{background: "C1F5FF", top: "17rem", 
        width: "21rem", height: "11rem", left:"-9rem"}}>
        </div>
      </div>
    </div>
  )
}
