import react from "react";
import me from "../images/userprofileFilterCut.jpeg";

const Intro = () => {
  return (
    <>
      <div className="Intro-Div" id="Top">
        <div className="intro-item">
          <img src={me} className="me" alt="me"></img>
        </div>
        <div className="intro-item text">
          <h3 className="subtitle">About me</h3>
          <p>Talk about me here</p>
        </div>
      </div>
    </>
  );
};
export default Intro;
