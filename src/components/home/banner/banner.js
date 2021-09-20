import NewsImg1 from "../../../assets/images/mindler-news1.svg";
import NewsImg2 from "../../../assets/images/mindler-news2.svg";
import NewsImg3 from "../../../assets/images/mindler-news3.svg";
import NewsImg4 from "../../../assets/images/mindler-news4.svg";
import NewsImg5 from "../../../assets/images/mindler-news5.svg";
import NewsImg6 from "../../../assets/images/mindler-news6.svg";
function Banner() {
  return (
    <div style={{margin:"3rem"}}>
      <h2 style={{ textAlign: "center" }}>Brought to you by the People From</h2>
      <br/>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img style={{ margin: "1rem" }} src={NewsImg1}></img>
        <img style={{ margin: "1rem" }} src={NewsImg2}></img>
        <img style={{ margin: "1rem" }} src={NewsImg3}></img>
        <img style={{ margin: "1rem" }} src={NewsImg4}></img>
        <img style={{ margin: "1rem" }} src={NewsImg5}></img>
        <img style={{ margin: "1rem" }} src={NewsImg6}></img>
        <img style={{ margin: "1rem" }} src={NewsImg3}></img>
        <img style={{ margin: "1rem" }} src={NewsImg4}></img>
        <img style={{ margin: "1rem" }} src={NewsImg6}></img>
        <img style={{ margin: "1rem" }} src={NewsImg5}></img>
        <img style={{ margin: "1rem" }} src={NewsImg2}></img>
      </div>
      <br/>
    </div>
  );
}
export default Banner;
