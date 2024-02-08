import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palaquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Introducing an exclusive opportunity to elevate your footwear game!
          For a limited time, we're thrilled to present a special offer on Nike
          shoes, the epitome of style and performance. Whether you're a sneaker
          enthusiast or an athlete seeking top-notch gear, now is the perfect
          time to indulge in the world of Nike.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Unparalleled Comfort: Nike is not just about style; it's about comfort
          that goes the extra mile. Walk, run, or train with supreme comfort as
          our specially crafted footwear blends cutting-edge design with
          ergonomic precision. Feel the difference with every step.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            iconURL={arrowRight}
            backgroundColor="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
