import React from "react";

const Button = ({ iconURL, label, backgroundColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? "bg-white border-slate-gray text-slate-gray rounded-full"
          : "bg-coral-red rounded-full text-white border-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      <img
        src={iconURL}
        alt="Arrow right key"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
