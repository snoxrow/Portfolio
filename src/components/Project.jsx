import React from "react";
import "../CSS/Project.css";
const Project = ({ title, img, lang, code, prev }) => {
  return (
    <div className="container-project">
      <div className="preview">
        <img src={img} />
      </div>
      <div className="info">
        <div className="left">
          <div className="name">{title}</div>
          <div className="description">{lang}</div>
        </div>
        <div className="right">
          <a className="link" href={code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a className="link" href={prev} target="_blank" rel="noopener noreferrer">
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
