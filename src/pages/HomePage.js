import react from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="HomePage-Div">
        <div className="Top-Div">
          <div className="title myname">
            <h1>Hawa Bah</h1>
          </div>
        </div>
        <Intro />
        <div className="space"></div>
        <Skills />
        <div className="space"></div>

        <Projects />
      </div>
    </>
  );
};
export default HomePage;
