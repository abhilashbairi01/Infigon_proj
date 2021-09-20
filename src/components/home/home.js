import Navbar from "./Navbar/navbar";
import Bodyfirst from "./Body/body";
import MidOne from "../home/MiddleOne/Middleone";
import MidTwo from "../home/MiddleTwo/Middletwo";
import Banner from  "../home/banner/banner";
import Feel from "../home/Feelfree/Feelfree";
import MidThree from "../home/MiddleThree/Middlethree";
import OurPack from "../home/OurPackage/Ourpackage";
import Contact from "../home/contact/contact";
import Fbcomp from "../home/social/fbcomp"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HAlfeatenApple from '../../assets/images/contact_apple.svg'
import Googleplay from '../../assets/images/contact_google.svg'
import fbicon from "../../assets/images/facebook.svg";
import Twicon from "../../assets/images/twitter.svg";
import Lnicon from "../../assets/images/linkedin.svg";

function Home() {
  return (
    <Router>
      {/* <Route> */}
      <Navbar />
      <Bodyfirst />
      {/* <MidOne /> */}
      {/* <MidTwo /> */}
      {/* <Banner /> */}
      {/* <OurPack /> */}
      {/* <MidThree /> */}
      {/* <Feel /> */}

      {/* <Contact /> */}
      {/* <div style={{order:"2px solid red",position:'relative',top:'-15rem',height:"0rem", width:'100vw' , display: "flex"}}>
       <a href='https://infigon.page.link/2f6j4DqAp1Uqz7427' target='_blank'> <Fbcomp Icon={HAlfeatenApple}/></a>

        <a href='https://infigon.page.link/2f6j4DqAp1Uqz7427' target='_blank'><Fbcomp Icon={Googleplay}/></a>
        <Fbcomp Icon={Lnicon}/>
      </div> */}
    </Router>
  );
}
export default Home;
