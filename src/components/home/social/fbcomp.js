import Fblogo from "../../../assets/images/facebook.svg";
function Fb(prop) {
  return (
    <>
      <span
        style={{
          padding:'0.2rem',
          width: "1rem",
          height: "1rem",
          borderRadius: "5rem",
        }}
      >
        <img src={prop.Icon} alt="Alt" />
      </span>
    </>
  );
}

export default Fb;
