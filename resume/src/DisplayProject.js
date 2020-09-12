import React from "react";

export const DisplayProject = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
          <div className="wrapper project1">
            <h4 className="projectName">
              <strong>Computer Builder - PCBuilder</strong>
            </h4>
            <ul className="computerProject">
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Front-end React"
                  />
                  &nbsp;&nbsp;Front-end React
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Bootstrap 4 Responsive Design"
                  />
                  &nbsp;&nbsp;Bootstrap 4 Responsive Design
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Created a database MongoDB"
                  />
                  &nbsp;&nbsp;Created a database MongoDB
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name=" NodeJS to create API"
                  />
                  &nbsp;&nbsp;NodeJS to create API
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Developed using Github"
                  />
                  &nbsp;&nbsp;Developed using Github
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
          <div className="wrapper project1">
            <h4 className="projectName">
              <strong>Resume Portfolio</strong>
            </h4>
            <ul className="resumeProject">
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Front-end React"
                  />
                  &nbsp;&nbsp;Front-end React
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Created expandable views"
                  />
                  &nbsp;&nbsp;Created expandable views
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Implemented React-Bootstrap"
                  />
                  &nbsp;&nbsp;Implemented React-Bootstrap
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Organized website layout into components"
                  />
                  &nbsp;&nbsp;Website layout into components
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    disabled="disabled"
                    checked="checked"
                    name="Deployed website on Github"
                  />
                  &nbsp;&nbsp;Deployed website on Github
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
