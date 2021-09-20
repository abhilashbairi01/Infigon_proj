/* eslint-disable no-const-assign */
import "./body.css";
import Fbcomp from "../../home/social/fbcomp";
import HAlfeatenApple from "../../../assets/images/contact_apple.svg";
import Googleplay from "../../../assets/images/contact_google.svg";
import { useState } from "react";
import Heroimg from "../../../assets/images/hero.png";
import React, { useRef } from "react";
function Bodyfirst() {
  const [Info, setInfo] = useState({
    GetInTouchEmail: "",
  });

  const ref = useRef();
  const reset = () => {
    ref.current.value = "";
  };
  async function DirectToFirebase() {
    const res = await fetch(
      "https://infigondb-default-rtdb.firebaseio.com/InfigongetintouchBody.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          GetInTouchDBEmail: Info.GetInTouchEmail,
        }),
      }
    );

    window.alert("Our representative will contact you soon");
    // window.location.reload();
  }
  return (
    
    <div>
      <div id="body">
        {/* <h1>fgdgdgd</h1> */}
        <img id="bodyimg" src={Heroimg} alt="Error" />
      </div>
      <div style={{ border: "0px solid red" }} id="Second_target">
        <div className="box">
       <div className="textone">
        <h1>UNLOCK your future with us.</h1>
        </div>
        <div className="texttwo"><h2>
          A one stop destination for your Career Selection, Education Planning
          and Skill development.
        </h2>
        </div> 
        <br />
        <br />
        <br />
        
        </div>
        

        <input
          style={{
            width: "50%",
            height: "2.2rem",
            textAlign: "center",
            outline: "none",
            border:"none",
          
          }}
          placeholder="Enter your E-mail"
          type="text"
          onChange={(e) => {
                  setInfo({ ...Info, GetInTouchEmail: e.target.value });
                  
                }}
            
           ref={ref}      
        ></input>
        <span>
          <button
            onClick={(e) => {
          
              e.preventDefault();
              DirectToFirebase(); 
              reset();              
              
              
              
            }}
            id="buttonAll"
            style={{ outline: "none", border: "none" }}
          >
            Book a Demo
          </button>
        </span>
        <br></br>
        <br></br>
        <div
          className="temp"
          style={{ textAlign: "center", paddingRight: "3rem" }}
        >
          <a href="https://infigon.page.link/2f6j4DqAp1Uqz7427" target="_blank">
            <Fbcomp Icon={Googleplay} />
          </a>
          <a 
          style={{ width: "10px" }}
           href="https://infigon.page.link/2f6j4DqAp1Uqz7427"
            target="_blank"
          >
            <Fbcomp Icon={HAlfeatenApple} style={{ width: "1rem" }} />
          </a>
          
          
        </div>
       
      </div>
    </div>
  );
}
export default Bodyfirst;
