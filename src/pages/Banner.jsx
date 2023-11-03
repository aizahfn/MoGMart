import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="hero bg-black text-white">
      <div className="card bg-dark text-white border-0 px-5">
        <div className="card-img-overlay flex flex-col justify-center">
          <div className="container text-black">
            <h5 className="text-5xl font-bold mb-0">GOOD DEALS</h5>
            <p className="text-2xl">BEST SELLING PRODUCT</p>
            <p className="text-2xl leading-relaxed font-semibold">
              Only For You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
