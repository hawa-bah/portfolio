import react, { useState } from "react";
import "./CardProject.css";
import Projects from "./Projects";

const CardProject = (props) => {
  let { project } = props;
  const [hover, setHover] = useState(false);
  return (
    <>
      <div key={project.name}>
        <div className="CardProject Div">
          <div
            className="CardProject Sub-Div"
            style={{
              background: "url(" + project.img + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minWidth: "300px",
              minHeight: "200px ",
              padding: "5px",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && (
              <div className="hoveredCard">
                <div>
                  <a href={project.githubLink} key={project.githubLink}>
                    <i className="fab fa-github fa-3x"></i>
                  </a>
                  <a href={project.demoLink} key={project.demoLink}>
                    <i className="fas fa-link fa-3x"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardProject;
