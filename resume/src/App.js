import React from "react";
import "./App.css";
import TopBanner from "./topBanner/TopBanner";
import SidePanel from "./sidePanel/SidePanel";
import Container from "../node_modules/react-bootstrap/Container";
import Row from "../node_modules/react-bootstrap/Row";
import Accordion from "../node_modules/react-bootstrap/Accordion";
import Card from "../node_modules/react-bootstrap/Card";

class App extends React.Component {
  state = { collapse: "" };
  headings = ["Skills", "Projects", "Education", "Employment"];
  skills = [
    { skill: "ReactJS", proficiency: "60%" },
    { skill: "Angular", proficiency: "50%" },
    { skill: "Bootstrap 4", proficiency: "60%" },
    { skill: "NodeJS", proficiency: "60%" },
    { skill: "MongoDB", proficiency: "60%" },
    { skill: "Postgres", proficiency: "40%" },
    { skill: "MySQL", proficiency: "40%" },
    { skill: "Oracle", proficiency: "50%" },
    { skill: "C++", proficiency: "60%" },
    { skill: "Java", proficiency: "40%" },
    { skill: "Git", proficiency: "40%" },
  ];
  createCardBody() {
    return (
      <Row className="row collapse-wrapper">
        <Accordion.Collapse
          eventKey="0"
          className={this.headings[0] + "-collapse"}
          id={"heading" + this.headings[0] + "-collapse"}
        >
          <Card.Body className="card card-body text-left" id="heading-card">
            <Container className="container">
              <span id="label">Legend</span>
              {this.createProgressLegend()}
              {/*end of legend*/}

              {this.createSkillProgressBars()}
            </Container>
            {/*end of container for progress bar */}
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse
          eventKey="1"
          className={this.headings[1] + "-collapse"}
          id={"heading" + this.headings[1] + "-collapse"}
        >
          {this.createProjectCarousel()}
        </Accordion.Collapse>
        <Accordion.Collapse
          eventKey="2"
          className={this.headings[2] + "-collapse"}
          id={"heading" + this.headings[2] + "-collapse"}
        >
          {this.createEducation()}
        </Accordion.Collapse>
        <Accordion.Collapse
          eventKey="3"
          className={this.headings[3] + "-collapse"}
          id={"heading" + this.headings[3] + "-collapse"}
        >
          {this.createEmploymentCarousel()}
        </Accordion.Collapse>
      </Row>
    );
  }
  createEducation() {
    return (
      <div className="card card-body text-left" id="heading-card">
        <div className="container education-container">
          {this.displayEducation()}
        </div>
      </div>
    );
  }
  displayEducation2() {
    return (
      <div className="row">
        {" "}
        <div className="col">Seneca College</div>
        <div className="w-100"></div>
        <div className="col">Computer Programming</div>
        <div className="w-100"></div>
        <div className="col">GPA 3.8</div>
        <div className="w-100"></div>
        <div className="col">President's Honour List</div>
      </div>
    );
  }
  displayEducation() {
    return (
      <div className="row">
        <div className="jumbotron">
          <h1 className="display-4">Seneca College</h1>
          <p className="lead">Computer Programming</p>
          <hr className="my-4" />
          <p className="lead">GPA 3.8</p>
          <p className="lead">President's Honour List</p>
        </div>
      </div>
    );
  }
  displayProjects() {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
            <div className="wrapper project1">
              <h4>
                <strong>Computer Builder - PCBuilder</strong>
              </h4>
              <ul>
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
              <h4>
                <strong>Resume</strong>
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
                    &nbsp;&nbsp;Organized website layout into components
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
  }
  displayEmployment() {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <strong>ITS Service Desk Technologist</strong>
                  </div>
                  <div className="col">
                    January 2019&nbsp;-&nbsp;August 2019
                  </div>
                  <div className="w-100"></div>
                  <div className="col">Seneca College</div>
                  <div className="col">Toronto, ON</div>
                </div>
                <div className="row employmentRow">
                  <div className="col employmentCol1">
                    <ul>
                      <li>Excellent communication skills</li>
                      <li>Project management skills</li>
                      <li>Familiar with Agile approach</li>
                      <li>Analytical skills</li>
                      <li>Worked in a cooperative team environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <strong>Team Member</strong>
                  </div>
                  <div className="col">June 2017&nbsp;-&nbsp;December 2017</div>
                  <div className="w-100"></div>
                  <div className="col">Tim Hortons</div>
                  <div className="col">Toronto, ON</div>
                </div>
                <div className="row employmentRow">
                  <div className="col employmentCol">
                    <ul>
                      <li>Identifying problems and finding solutions</li>

                      <li>Project management skills</li>
                      <li>Assisted in training new employees</li>
                      <li>Face to face communication</li>
                      <li>
                        Meeting expectations in areas such as timeliness,
                        quality and consistency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  createProjectCarousel() {
    return (
      <div
        id="carouselProjectIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselProjectIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselProjectIndicators" data-slide-to="1"></li>
        </ol>
        {this.displayProjects()}
        <a
          className="carousel-control-prev"
          href="#carouselProjectIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselProjectIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
  createEmploymentCarousel() {
    return (
      <div
        id="carouselEmploymentIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselEmploymentIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-target="#carouselEmploymentIndicators"
            data-slide-to="1"
          ></li>
        </ol>
        {this.displayEmployment()}
        <a
          className="carousel-control-prev"
          href="#carouselEmploymentIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselEmploymentIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
  createSkillProgressBars() {
    return this.skills.map((skill, index) => {
      return (
        <div className="progress row" key={index}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: skill.proficiency }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="120"
          >
            {skill.skill}
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {skill.proficiency}
        </div>
      );
    });
  }
  createProgressLegend() {
    return (
      <div className="progress row">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="120"
        >
          20%
        </div>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="120"
        >
          20%
        </div>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="120"
        >
          20%
        </div>
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="120"
        >
          20%
        </div>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="120"
        >
          20%
        </div>
      </div>
    );
  }

  createButtons() {
    return this.headings.map((heading, index) => {
      return (
        <Row className="row btn-wrapper heading-wrapper" key={index}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={index.toString()}
            className="heading-btn"
            id={heading}
          >
            {heading}
          </Accordion.Toggle>
        </Row>
      );
    });
  }
  render() {
    return (
      <div className="App fluid-container">
        <div className="row top-panel">
          <div className="col-md-12">
            <TopBanner />
          </div>
        </div>
        <div className="row">
          <div className="col-2 side-panel">
            <SidePanel />
          </div>
          <div className="col-10 heading">
            <Accordion>
              {this.createButtons()} {this.createCardBody()}
            </Accordion>
          </div>
        </div>
        {/*end of row */}
      </div>
    );
  }
}
export default App;
