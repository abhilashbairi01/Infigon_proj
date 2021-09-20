import Logo from "../../../assets/images/offer_1.svg";
import "./contact.css";
import { ContactHide2 } from "../../home/Navbar/navbar";
import { Link, NavLink } from "react-router-dom";
import NewsImg1 from "../../../assets/images/mindler-news1.svg";
import NewsImg2 from "../../../assets/images/mindler-news2.svg";
import NewsImg3 from "../../../assets/images/mindler-news3.svg";
import NewsImg4 from "../../../assets/images/mindler-news4.svg";
import NewsImg5 from "../../../assets/images/mindler-news5.svg";
import NewsImg6 from "../../../assets/images/mindler-news6.svg";

// import react from "react";
function Contact() {
  return (
    <div id="midTwoMaster">
      <h4 style={{ textAlign: "center" }}>In the Media</h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <img src={NewsImg1}></img>
        <img src={NewsImg2}></img>
        <img src={NewsImg3}></img>
        <img src={NewsImg4}></img>
        <img src={NewsImg5}></img>
      </div>
      <div id="midtwo" style={{marginBottom:"0rem"}}>
        <div id="offer">
          {/* <img
            style={{
              boxShadow: "0.3rem .3rem .7rem .16rem",
              margin: "1.3rem",
              backgroundColor: "rgb(235,247,246)",
              height: "6rem",
              width: "6rem",
              borderRadius: "100px",
              padding: "1.3rem",
            }}
            src={Logo}
            alt="Error"
          />
          <p>Admissions Guidance</p>

          <p>Available 24/7</p>
          <h6>
            Download our APP first, consectetur adipiscing elit. Eu scelerisque
            lorem nibh
          </h6>

          <h6>Join Us ></h6> */}
          <ContactHide2 />
        </div>
        <div
          id="offers"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Product</h4>
            <br />

            <Link style={{ textDecoration: "none", color: "black" }}>
              Employee database
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Payroll
            </Link>
            <br />

            <Link style={{ textDecoration: "none", color: "black" }}>
              Absences
            </Link>
            <br />

            <Link style={{ textDecoration: "none", color: "black" }}>
              Time tracking
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Shift planner
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Recurting
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Information</h4>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>FAQ</Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>Blog</Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Support
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Company</h4>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              About us
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Careers
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Contact us
            </Link>
            <br />
            <Link style={{ textDecoration: "none", color: "black" }}>
              Lift Media
            </Link>
          </div>
        </div>
        <div id="offer">
          <SubscribePart />
        </div>
      </div>
    </div>
  );
}

function SubscribePart() {
  return (
    <>
      <div id="contactHideduplicate" style={{ textAlign: "left" }}>
        <ul style={{ listStyleType: "none" }}>
          <h5>Subscribe</h5>
          <br />
          <li>
            <input type="text" name="" id="" />
            <div
              style={{
                backgroundColor: "rgb(47,55,120)",
                height: "2rem",
                display: "inline-block",
              }}
            >
              <ii
                style={{ width: "3rem", textAlign: "center", color: "white" }}
                className="fas fa-arrow-right"
              />
            </div>
          </li>
          <li>
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              voluptatem omnis, asperiores molestiae eum perferendis!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
