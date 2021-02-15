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
          <p>
            Hi! My name is Hawa, I am a recent graduate in Mathematics.
            Currently I am a student at the Black Codher BootCamp, where I learn
            about new programming languages and tools to become a full-stack
            developer.
          </p>
        </div>
      </div>
    </>
  );
};
export default Intro;
