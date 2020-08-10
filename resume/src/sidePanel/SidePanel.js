import React from "react";
import "./SidePanel.css";
import Picture from "./profilePicture.jpg";

class SidePanel extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        <div className="row profilePic">
          <div className="col img-wrapper">
            <img id="pic" src={Picture} alt="Profile"></img>
          </div>
        </div>
        <div className="row info">
          <div className="col info-wrapper">
            <div className="row link">
              <div className="col">
                <a
                  className="btn btn-primary"
                  role="button"
                  href="https://www.linkedin.com/in/gia-bao-danny-nguyen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="row link">
              <div className="col">
                <a
                  className="btn btn-primary"
                  role="button"
                  href="https://twitter.com/BaoGiaNguyen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="row link">
              <div className="col">
                <a
                  className="btn btn-primary"
                  role="button"
                  target="_blank"
                  href="https://github.com/DannyNguyenCode"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="row link">
              <div className="col">
                <a
                  className="btn btn-primary"
                  role="button"
                  target="_blank"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
