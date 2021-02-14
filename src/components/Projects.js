import react from "react";

import "./CardProject.css";
import CardProject from "./CardProject";
import quiz from "../images/quiz-logo.png";
import tira from "../images/Tira-logo.png";
import booky from "../images/booky-logo.png";

const Projects = () => {
  const projectsList = [
    {
      img: quiz,
      name: "Capital-City Quiz",
      githubLink: "https://github.com/hawa-bah/hawa-bah.github.io",
      demoLink: "https://hawa-bah.github.io/",
    },
    {
      img: tira,
      name: "Expense Tracker for Trips",
      githubLink:
        "https://github.com/hawa-bah/black-codher-my-personal-project",
      demoLink: "https://black-codher-hawa.herokuapp.com/",
    },
    {
      img: booky,
      name: "This portafolio",
      githubLink: "",
      demoLink: "",
    },
  ];
  return (
    <>
      <div className="Projects-Div" id="Projects">
        <h3 className="subtitle">My Work</h3>
        <div className="projectsList">
          {projectsList.map((project) => {
            return (
              <>
                <CardProject project={project} key={project.name} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
