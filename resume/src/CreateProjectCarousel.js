import React from "react";
import { DisplayProject } from "./DisplayProject";

export const CreateProjectCarousel = () => {
  return (
    <div className="container-fluid">
      <div className="row">
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
          <DisplayProject />
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
      </div>
    </div>
  );
};
