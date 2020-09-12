import React from "react";
import "./App.css";
import TopBanner from "./topBanner/TopBanner";
import SidePanel from "./sidePanel/SidePanel";
import { CreateButton } from "./CreateButton";
import { CreateCardBody } from "./CreateCardBody";
import Accordion from "../node_modules/react-bootstrap/Accordion";

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
  render() {
    return (
      <div className="App fluid-container">
        <div className="row">
          <div className="col-2 side-panel">
            <SidePanel />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 top-panel">
                <TopBanner />
              </div>
            </div>
            <div className="row">
              <div className="container-fluid">
                <Accordion>
                  <div className="row content-panel">
                    <CreateButton headings={this.headings} />{" "}
                    <CreateCardBody
                      headings={this.headings}
                      skills={this.skills}
                    />
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
