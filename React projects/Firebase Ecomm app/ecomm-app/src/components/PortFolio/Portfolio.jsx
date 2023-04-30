import "./PortFolio.css";
import {Swiper, SwiperSlide} from "swiper/react";
import LoginPage from "../../img/Login Page.jpg";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css"

export const Portfolio = () => {
  return (
    <div className="portfolio" id="PortFolio">
      
    {/* Heading */}
    <span className="span-1">Recent projects</span>
    <span className="span-2">Portfolio</span>

    {/* Slider */}
    <Swiper 
    spaceBetween={20}
    slidesPerView={3}
    grabCursor={true} 
    className="portfolio-slider">

      <SwiperSlide className="swiper-slide">
       <a href="https://complete-bazar-ecom-website.vercel.app/" target="_blank">
       <img src={Ecommerce} alt="" />
       </a> 
      </SwiperSlide>
      
      <SwiperSlide className="swiper-slide">
      <a href="https://github.com/Ngash01/react-redux-Login-page" target="_blank">
       <img src={LoginPage} alt="" />
      </a>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={MusicApp} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src={HOC} alt="" />
      </SwiperSlide>

    </Swiper>
    <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{background: "C1F5FF", marginTop: "2rem", 
        width: "21rem", height: "11rem", left:"9rem"}}>
        
        </div>
    </div>
    )
}
