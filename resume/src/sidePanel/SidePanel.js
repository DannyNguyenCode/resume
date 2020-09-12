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
          <div className="col info-wrapper list-group">
            <a
              className="list-group-item list-group-item-action side-button"
              role="button"
              href="https://www.linkedin.com/in/gia-bao-danny-nguyen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="linked">LinkedIn </span>
              <span class="fa fa-linkedin"></span>
            </a>

            <a
              className="list-group-item list-group-item-action side-button btn-social"
              role="button"
              href="https://twitter.com/BaoGiaNguyen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="twitter">Twitter </span>
              <span class="fa fa-twitter"></span>
            </a>

            <a
              className="list-group-item list-group-item-action side-button"
              role="button"
              target="_blank"
              href="https://github.com/DannyNguyenCode"
              rel="noopener noreferrer"
            >
              <span className="github">Github </span>
              <span class="fa fa-github"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
