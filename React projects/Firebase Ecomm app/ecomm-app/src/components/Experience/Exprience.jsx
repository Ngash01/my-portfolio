import "./Experience.css"

export const Exprience = () => {
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed Projects</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">-</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
       {/* blur
       <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{background: "C1F5FF", top: "17rem", 
        width: "21rem", height: "11rem", left:"-9rem"}}>
        </div> */}
    </div>
    )
}
