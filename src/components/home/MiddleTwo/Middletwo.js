import Logo from "../../../assets/images/offer_1.svg";
import "./midtwo.css";
function MidTwo() {
  return (
    <div id="midTwoMaster">
      <h1 style={{ textAlign: "center" }}>What We Offer</h1>
      <h5 style={{ textAlign: "center" }}>We care about you. Here’s how we can help with your educational needs.</h5>
      <div id="midtwo">
      
        <div id='offer' >
        <img style={{boxShadow:"0.3rem .3rem .7rem .16rem",margin:"1.3rem",backgroundColor:"rgb(235,247,246)",height:"6rem",width:"6rem",borderRadius:"100px",padding:"1.3rem"}} src={Logo} alt="Error" />
          <p>Admissions Guidance</p>

          <p>Available 24/7</p>
          <h6>Download our APP first, consectetur adipiscing elit. Eu scelerisque lorem nibh</h6>

          <h6>Join Us ></h6>
        </div>
        <div id='offer' >
          <img style={{boxShadow:"0.3rem .3rem .7rem .16rem",margin:"1.3rem",backgroundColor:"rgb(235,247,246)",height:"6rem",width:"6rem",borderRadius:"100px",padding:"1.3rem"}} src={Logo} alt="Error" />
          <p>Admissions Guidance</p>

          <p>Available 24/7</p>
          <h6>Download our APP first, consectetur adipiscing elit. Eu scelerisque lorem nibh</h6>

          <h6>Join Us ></h6>
        </div>
        <div id='offer' >
        <img style={{boxShadow:"0.3rem .3rem .7rem .16rem",margin:"1.3rem",backgroundColor:"rgb(235,247,246)",height:"6rem",width:"6rem",borderRadius:"100px",padding:"1.3rem"}} src={Logo} alt="Error" />
          <p>Admissions Guidance</p>

          <p>Available 24/7</p>
          <h6>Download our APP first, consectetur adipiscing elit. Eu scelerisque lorem nibh</h6>

          <h6>Join Us ></h6>
        </div>
      </div>
    </div>
  );
}
export default MidTwo;
