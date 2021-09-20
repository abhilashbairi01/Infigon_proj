import Logo from "../../../assets/images/logo.png";
import "./navbar.css";
import fbicon from "../../../assets/images/facebook.svg";
import twicon from "../../../assets/images/twitter.svg";
import lnicon from "../../../assets/images/linkedin.svg";
import "../../../fontawesome-free-5.13.1-web/css/all.css";
import Icon from "../../home/social/fbcomp";
import ApplePlay from "../../../assets/images/contact_apple.svg";
import GooglePlay from "../../../assets/images/contact_google.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Nav() {
  let [toggle, settoggle] = useState(1);
  function Popover() {
    settoggle(!toggle);
    if (toggle == 1) document.getElementById("popover").style.display = "block";
    if (toggle == 0) document.getElementById("popover").style.display = "none";
  }

  return (
    <div>
      <nav
        onLoad={() => Popover()}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <a id="" className="navbar-brand" href="#">
            <img id="firstlogo" src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a id="i" className="nav-link" href="#">
                  Programs
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a id="i" className="nav-link" href="#">
                  Library
                </a>
              </li> */}
              <li className="nav-item">
                <a id="i" className="nav-link" href="#">
                  About Us
                </a>
              </li>
              {/* <li className="nav-item">
                <a id="i" className="nav-link" href="#">
                  Blogs
                </a>
              </li> */}
              <li className="nav-item" id="hide">
                <a
                  onClick={() => {
                    Popover();
                  }}
                  id="i"
                  className="nav-link"
                  href="#"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
            <button
              onClick={() => {
                Popover();
              }}
              id="butt"
              className="btn"
              type="submit"
            >
              Get in Touch
            </button>
            <div id="socialHide" style={{ padding: "1rem" }}>
              <Icon Icon={fbicon} />
              <Icon Icon={twicon} />
              <Icon Icon={lnicon} />
            </div>
            <ContactHide />
          </div>
        </div>
      </nav>

      <div id="popover">
        <Pop fn={Popover} />
      </div>
    </div>
  );
}

function ContactHide() {
  return (
    <>
      <div id="contactHide">
        <ul style={{ listStyleType: "none" }}>
          <h5>Contact us</h5>
          <li>
            <a>
              <i className="fas fa-map-pin"></i> Address ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="mailto:ipsumdolor@gmail.com"
            >
              <i className="far fa-envelope"></i> Email : ipsumdolor@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:8016216564"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="fas fa-phone-alt"></i> +91 87449 87449
            </a>
          </li>
        </ul>
        <span>
          <a href='https://infigon.page.link/2f6j4DqAp1Uqz7427' target='_blank'><img src={GooglePlay}></img></a>
        </span>
        <span>
        <a href='https://infigon.page.link/2f6j4DqAp1Uqz7427' target='_blank'><img src={ApplePlay}></img></a>

          {/* <img src={}></img> */}
        </span>
      </div>
    </>
  );
}

export function ContactHide2() {
  return (
    <>
      <div id="contactHideduplicate">
        <ul style={{ listStyleType: "none" }}>
          <h5>Contact us</h5>
          <li>
            <a>
              <i className="fas fa-map-pin"></i> Address ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="mailto:ipsumdolor@gmail.com"
            >
              <i className="far fa-envelope"></i> Email : ipsumdolor@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:8016216564"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="fas fa-phone-alt"></i> +91 87449 87449
            </a>
          </li>
        </ul>
        <span >
          <Link to="https://www.google.com">
            <img src={GooglePlay}></img>
          </Link>
        </span>
        <span>
          <a href="https://infigon.page.link/2f6j4DqAp1Uqz7427">
            <img src={ApplePlay}></img>
          </a>
        </span>
      </div>
    </>
  );
}

function Pop(prop) {
  const [Info, setInfo] = useState({
    Name: "",
    YouAre: "",
    Stanadard: "",
    Board: "",
    Location: "",
    Query: "",
    Email: "",
    Mob: "",
  });

  async function DirectToFirebase() {
    const res = await fetch(
      "https://infigondb-default-rtdb.firebaseio.com/Infigonform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: Info.Name,
          HeIs: Info.YouAre,
          Standard: Info.Stanadard,
          Board: Info.Board,
          Location: Info.Location,
          Query: Info.Query,
          Email: Info.Email,
          Mobile: Info.Mob,
        }),
      }
    );

    window.alert("Our representative will contact you soon");
    window.location.reload();
  }

  return (
    <>
      <div
        style={{
          width: "50vw",
          height: "50vh",
          position: "relative",
          // top: "50%",
          // display:'none',
          // left:'50%',
          // zIndex: "10",
          // backgroundColor: "ke",
          // border: "2px solid red",
        }}
        id="popcss"
      >
        <div
          style={{
            // border: "2px solid blue",
            // minWidth: "40%",
            // maxWidth: "40%",
            padding: "2rem",
            // height: "50%",
            margin: "auto",
            // marginTop: "1.7rem",
            backgroundColor: "#FFFFFF",
            // position:"fixed"
          }}
        >
          <h3>
            Get In Touch{" "}
            <i
              onClick={() => {
                prop.fn();
              }}
              className="far fa-times-circle"
            ></i>
          </h3>

          <form>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setInfo({ ...Info, Name: e.target.value });
                }}
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                You are a :
              </label>
              {/* <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              /> */}
              <select class="form-select" aria-label="Default select example">
                <option selected>You are</option>
                <option value="1">Student</option>
                <option value="2">Parent</option>
                onClick=
                {(e) => {
                  setInfo({ ...Info, YouAre: e.target.value });
                }}
              </select>
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Standard(School) / Year of Study(College)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setInfo({ ...Info, Standard: e.target.value });
                }}
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Board(School) / Degree(College)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setInfo({ ...Info, Board: e.target.value });
                }}
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Contact Number)
              </label>
              <input
                type="tel"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setInfo({ ...Info, Mob: e.target.value });
                }}
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Email ID
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setInfo({ ...Info, Email: e.target.value });
                }}
              />
            </div>

            <div class="mb-1">
              <label for="exampleInputPassword1" class="form-label">
                Location (City - State)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setInfo({ ...Info, Location: e.target.value });
                }}
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputPassword1" class="form-label">
                Any specific queries?
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setInfo({ ...Info, Query: e.target.value });
                }}
              />
            </div>

            <button
              type="submit"
              style={{ right: "0" }}
              onClick={(e) => {
                e.preventDefault();
                DirectToFirebase();
              }}
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>

          {/* <form action="" method="">
            <h3>
              Get In Touch{" "}
              <i
                onClick={() => {
                  prop.fn();
                }}
                className="far fa-times-circle"
              ></i>
            </h3>

            <span>Name</span>
            <input
              id="pop_inputs"
              placeholder="Name"
              type="text"
              onChange={(e) => {
                setInfo({ ...Info, Name: e.target.value });
              }}
            ></input>

            <h6>
              {" "}
              <span>I am a</span>
              <span>
                {" "}
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>{" "}
              </span>
            </h6>

            <h6>
              {" "}
              <span>Board / Degree</span>
              <span>
                {" "}
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </span>
            </h6>

            {/* <h6               id="pop_inputs"
>  <span>I am a</span>
         <span>   <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select> </span></h6>
             */}
          {/* 
            <h6>
              {" "}
              <span>Email</span>
              <input
                id="pop_inputs"
                placeholder="Email"
                type="text"
                onChange={(e) => {
                  setInfo({ ...Info, Email: e.target.value });
                }}
              ></input>
            </h6>

            <h6>
              <span>Phone Number</span>

              <input
                id="pop_inputs"
                placeholder="Mobile No"
                type="text"
                onChange={(e) => {
                  setInfo({ ...Info, Mob: e.target.value });
                }}
              ></input>
            </h6>

            <h6>
              {" "}
              <span>City / Location</span>
              <span>
                {" "}
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </span>
            </h6>
            <h6>Any Specific Queries</h6>

            <textarea
              id="pop_inputs"
              placeholder="Write Your Query Here"
              type="text"
            ></textarea>
            <br />
            <button
              style={{ marginTop: "1rem" }}
              id="buttonAll"
              type="button"
              onClick={(e) => {
                // e.preventDefault()
                DirectToFirebase();
              }}
            >
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
}
export default Nav;
