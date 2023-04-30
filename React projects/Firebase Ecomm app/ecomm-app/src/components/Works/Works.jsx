import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"


export const Works = () => {
  return (
    <div className="works" id='Prospects'>
      {/* Left Side */}
      <div className="awesome" style={{marginTop:"20px"}}>
        <span>Future Prospects </span>
        <span>Brands and Clients</span>
        <span>I am a passionate and driven developer with a strong desire <br />
           to continually learn and grow in the field. <br />
            I am always looking for new ways to challenge myself <br />
           and expand my knowledge.
        </span>

        <button className="button s-button">Hire Me</button>
        {/* <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div> */}
      </div>
      {/* Right */}
      <div className="w-right" style={{marginTop:"20px"}}>
        <div className="w-mainCircle" style={{marginTop:"20px"}}>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* BackGround Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
         {/* blur */}
      <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{background: "C1F5FF", top: "17rem", 
        width: "21rem", height: "11rem", left:"-9rem"}}>
        </div>
      </div>
     
    </div>
  )
}
