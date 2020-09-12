import React from "react";

export const CreateSkillProgressBar = ({ skills = [] }) => {
  return skills.map((skill, index) => {
    return (
      <div>
        <div className="row">
          <pre className="title"> {skill.skill}</pre>
        </div>
        <div className="progress row" key={index}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: skill.proficiency, maxWidth: skill.proficiency }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="120"
          ></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="proficiency d-flex h-100 align-items-center justify-content-center">
            {skill.proficiency}
          </span>
        </div>
      </div>
    );
  });
};
