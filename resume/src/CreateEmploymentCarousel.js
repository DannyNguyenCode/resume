import React from "react";
import { DisplayEmployment } from "./DisplayEmployment";

export const CreateEmploymentCarousel = () => {
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
        <li data-target="#carouselEmploymentIndicators" data-slide-to="1"></li>
      </ol>
      <DisplayEmployment />
      <a
        className="carousel-control-prev"
        href="#carouselEmploymentIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselEmploymentIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
