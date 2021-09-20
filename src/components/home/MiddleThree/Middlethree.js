import Master1 from "../../../assets/images/mentor_1.svg";

import Master2 from "../../../assets/images/mentor_2.svg";
import Master3 from "../../../assets/images/mentor_3.svg";
import Master4 from "../../../assets/images/mentor_4.svg";
import "./middlethree.css";
function MidThree() {
  return (
    <div id="midThreeMaster">
      <h1 style={{ textAlign: "center" }}>Our Mentors</h1>
      <h5 style={{ textAlign: "center" }}>
      We have the most economical pricing in the industry.
      </h5>
      <div id="midthree">
        <div id="mentors">
          <img style={{ borderRadius: "200px",margin:"1rem",idth:"100px",height:"100px" }} src={Master1} alt="Error" />
          <br/>

          <h4 style={{color:"rgb(26,99,214)"}}>Kate Moss</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut
            pellentesque mauris pretium, non, odio. Viverra proin ut auctor ut
            libero ut auctor.
          </p>
          <h4>B.E in C.S. SPIT</h4>
        </div>
        <div id="mentors">
        <img style={{ borderRadius: "200px",margin:"1rem",width:"100px",height:"100px" }} src={Master2} alt="Error" />
        <br/>
          <h4 style={{color:"rgb(26,99,214)"}}>Thor Sigmunddsen</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut
            pellentesque mauris pretium, non, odio. Viverra proin ut auctor ut
            libero ut auctor.
          </p>
          <h4>B.E in C.S. SPIT</h4>
        </div>
        <div id="mentors">
        <img style={{ borderRadius: "200px",margin:"1rem",width:"100px",height:"100px" }} src={Master3} alt="Error" />
        <br/>

          <h4 style={{color:"rgb(26,99,214)"}}>Avani Vartak</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut
            pellentesque mauris pretium, non, odio. Viverra proin ut auctor ut
            libero ut auctor.
          </p>
          <h4>B.E in C.S. SPIT</h4>
        </div>
        <div id="mentors">
        <img style={{ borderRadius: "200px",margin:"1rem",width:"100px",height:"100px" }} src={Master4} alt="Error" />
        <br/>

          <h4 style={{color:"rgb(26,99,214)"}}>Mohd. Shami</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut
            pellentesque mauris pretium, non, odio. Viverra proin ut auctor ut
            libero ut auctor.
          </p>
          <h4>B.E in C.S. SPIT</h4>
        </div>
      </div>
    </div>
  );
}
export default MidThree;
