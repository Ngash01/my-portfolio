import "./Services.css";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import { Card } from "../Card/Card";
import { motion } from "framer-motion";


export const Services = () => {

  const transition = {duration: 1, type: 'spring'}

  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services</span>
        <span><h4>React.js development:</h4> I am experienced in creating dynamic and interactive user interfaces using React.js. From simple landing pages to complex web applications, I can build custom React components that meet your needs.</span><br />
        <span><h4>HTML/CSS development: </h4>I have a deep understanding of HTML and CSS, and can create responsive designs that look great on all devices.</span><br />
        <span><h4>Cross-browser compatibility:</h4> I understand the importance of ensuring that your website works seamlessly across different browsers and devices.</span>
        <button className="button i-button">Hire Me</button>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* Right Side */}

      <div className="cards">
        <motion.div 
        
        initial ={{left:"25rem"}} 
        whileInView={{left:"14rem"}}
        transition={transition}

        style={{left:"14rem", marginTop:"10px"}}>
          <Card
           emoji={HeartEmoji}
           heading={"Design"}
           detail={"Figma, Sketch, Photoshop, Adobe Adobe Xd "}
           />
        </motion.div>

       {/* 2nd div */}

        <motion.div
        
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}

        style={{top:"12rem", left:"-4rem" }}>
        <Card 
           emoji={Glasses}
           heading={"Developer"}
           detail={"Html, Css, Javascript, React, Node, Tailwind"}
           />
        </motion.div>

      {/* 3rd div */}
        <motion.div 
        
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        
        style={{top:"19rem", left:"12rem" }}>
        <Card 
           emoji={Humble}
           heading={"UI/UX"}
           detail={"Clear and intuitive navigation, Responsive design"}
           />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

      </div>
    </div>
  )
}
