import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slids } from "../data/Data";

export default function HomeSlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h1 className="mb-5 display-3 text-primary">
               Paradise Nursery
              </h1>
              <h4 className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
              <div className="position-relative mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white "
                  style={{ top: "0", right: "80%" }}
                >
                  <a href="/shop" className="text-white">Get Started</a>
                </button>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <Slider {...settings}>
                    {slids.map((val, index) => (
                      <div className="carousel-item rounded" key={index}>
                        <img
                          src={val.slide_img}
                          className="img-fluid w-100 h-100 bg-secondary rounded"
                          alt="First slide"
                        />
                        <a
                          href="#"
                          className="btn px-4 py-2 text-white rounded"
                        >
                          {val.category}
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
