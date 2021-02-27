import react from "react";
import me from "../images/userprofileFilterCut.jpeg";

const Intro = () => {
  return (
    <>
      <div className="Intro-Div" id="Top">
        <div className="intro-item">
          <img src={me} className="me" alt="me"></img>
        </div>
        <div className="intro-item">
          <div className="text">
            <h3 className="subtitle">About me</h3>
            <p>
              Hi! My name is Hawa, I am a recent graduate in Mathematics.
              Currently I am a student at the Black Codher BootCamp, where I
              learn about new programming languages and tools to become a
              full-stack developer.
            </p>
          </div>
          <div className="social-media links">
            <a href="https://www.linkedin.com/in/hawa-bah-bah/">
              <i class="fab fa-linkedin fa-7x"></i>
            </a>
            <a herf="https://twitter.com/HawaCodes">
              <i class="fab fa-twitter fa-7x"></i>
            </a>
            <a href="https://github.com/">
              <i class="fab fa-github fa-7x"></i>
            </a>
            <a href="mailto:hawabahbah25@gmail.com">
              <i class="far fa-envelope fa-7x"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
