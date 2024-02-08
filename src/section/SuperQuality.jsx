import React from "react";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palaquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          At NIKE, our commitment is to deliver excellence with every step. We
          take pride in providing superlative quality shoes that not only
          complement your style but also elevate your comfort. Crafted with
          precision and care, our shoes are a testament to our dedication to
          superior craftsmanship.
        </p>
        <div className="mt-11">
          <button className="bg-coral-red py-4 px-10 rounded-[80px] text-white font-montserrat">
            View Details
          </button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt=""
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
