import React from "react";

export const DisplayEmployment = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="item-wrapper d-flex h-100 align-items-center justify-content-center">
          <div className="wrapper">
            <div className="container itsEmp">
              <div className="row">
                <div className="col">
                  <strong className="empName">
                    ITS Service Desk Technologist
                  </strong>
                </div>
                <div className="col"></div>
                <div className="w-100"></div>
                <div className="col">
                  <span className="bold itsLoc">
                    Seneca College - Toronto, ON
                  </span>
                </div>
                <pre className="bold itsDate">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  January 2019&nbsp;-&nbsp;August 2019
                </pre>
                <div className="col"></div>
              </div>
              <div className="row employmentRow">
                <div className="col employmentCol">
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
                  <strong className="empName">Team Member</strong>
                </div>
                <div className="col"></div>
                <div className="w-100"></div>
                <div className="col">
                  <span className="bold">
                    Tim Hortons&nbsp;-&nbsp;Toronto, ON
                  </span>
                </div>

                <div className="col">
                  <pre className="bold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2017&nbsp;-&nbsp;December
                    2017
                  </pre>
                </div>
              </div>
              <div className="row employmentRow">
                <div className="col employmentCol">
                  <ul>
                    <li>Identifying problems and finding solutions</li>

                    <li>Project management skills</li>
                    <li>Assisted in training new employees</li>
                    <li>Face to face communication</li>
                    <li>
                      Meeting expectations in timeliness, quality and
                      consistency
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
};
