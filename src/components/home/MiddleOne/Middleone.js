import Mobile from "../../../assets/images/counsellin_mobile.svg";
import "./midone.css";
function MidOne() {
  return (
    <div id="midOneMaster">
      <h1 style={{ textAlign: "center" }}>Our Counselling Process</h1>
      <h5 style={{ textAlign: "center" }}>We consider it the four-step method towards certain success.</h5>
      <div id="midOne">
        <div id="extent" >
          <h3>S T E P 1</h3>
          <h2 style={{color:"rgb(26,99,214)",fontStyle:"bold"}}>SELF ANALYSIS</h2>
          <br/>

          <h5>
            Download our APP first, consectetur adipiscing elit. Eu scelerisque
            lorem nibh auctor. Amet, arcu aad.
          </h5>
          <br/>
          <p style={{lineHeight:"35px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
            diam quam odio donec fringilla sed. Egestas pharetra, egestas
            consequat sit erat. Condimentum vel vestibulum, facilisi euismod id
            ornare fermentum ac. Bibendum turpis faucibus faucibus lectus cursus
            elementum. Suscipit mauris viverra pellentesque nisi, diam rhoncus
            vitae purus. Sed purus sed lectus.
          </p>
          <br/>
          <button id="buttonAll">Next</button>
        </div>
        <div style={{marginTop:"0rem"}} >
          <img style={{margin:"1rem"}} src={Mobile} alt="Error" />
        </div>
      </div>
    </div>
  );
}
export default MidOne;
