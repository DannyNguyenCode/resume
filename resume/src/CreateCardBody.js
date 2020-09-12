import React from "react";
import { CreateSkillProgressBar } from "./CreateSkillProgressBar";
import { CreateEducation } from "./CreateEducation";

import { CreateProjectCarousel } from "./CreateProjectCarousel";
import { CreateEmploymentCarousel } from "./CreateEmploymentCarousel";

import Container from "../node_modules/react-bootstrap/Container";
import Row from "../node_modules/react-bootstrap/Row";
import Accordion from "../node_modules/react-bootstrap/Accordion";
import Card from "../node_modules/react-bootstrap/Card";

export const CreateCardBody = ({ headings = [], skills = [{}] }) => {
  return (
    <Row className="row collapse-wrapper" style={{ marginLeft: 0 }}>
      <Accordion.Collapse
        eventKey="0"
        className={headings[0] + "-collapse"}
        id={"heading" + headings[0] + "-collapse"}
      >
        <Card.Body className="card card-body text-left" id="heading-card">
          <Container className="container">
            <CreateSkillProgressBar skills={skills} />
          </Container>
          {/*end of container for progress bar */}
        </Card.Body>
      </Accordion.Collapse>

      <Accordion.Collapse
        eventKey="1"
        className={headings[1] + "-collapse"}
        id={"heading" + headings[1] + "-collapse"}
      >
        <CreateProjectCarousel />
      </Accordion.Collapse>
      <Accordion.Collapse
        eventKey="2"
        className={headings[2] + "-collapse"}
        id={"heading" + headings[2] + "-collapse"}
      >
        <CreateEducation />
      </Accordion.Collapse>
      <Accordion.Collapse
        eventKey="3"
        className={headings[3] + "-collapse"}
        id={"heading" + headings[3] + "-collapse"}
      >
        <CreateEmploymentCarousel />
      </Accordion.Collapse>
    </Row>
  );
};
