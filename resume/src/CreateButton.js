import React from "react";
import Accordion from "../node_modules/react-bootstrap/Accordion";
import Card from "../node_modules/react-bootstrap/Card";
export const CreateButton = ({ headings = [] }) => {
  console.log("Hello", headings);
  //const { headings } = this.props.headings;
  return headings.map((heading, index) => {
    return (
      <div className="col-3 btn-col">
        <div className="btn-wrapper">
          <Accordion.Toggle
            as={Card.Header}
            eventKey={index.toString()}
            className="heading-btn"
            id={heading}
            key={index}
          >
            <span>
              {" "}
              <strong>{heading}</strong>
            </span>
          </Accordion.Toggle>
        </div>
      </div>
    );
  });
};
