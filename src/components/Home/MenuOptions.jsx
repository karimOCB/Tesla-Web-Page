/* eslint-disable react/prop-types */
import React from "react";

const MenuOptions = ({ options, extraOptions }) => {
  return (
    <aside
      className={`flex ${extraOptions ? "w-full justify-center gap-x-10 max-md:ml-10 max-md:flex-col lg:gap-x-16" : "ml-14 basis-[33%] flex-col items-start"}`}
    >
      <ul>
        {extraOptions && (
          <h5 className="mb-7 cursor-text font-semibold text-black/70 max-md:hidden">Resources</h5>
        )}
        {options.map((option) => (
          <a
            key={option}
            className="mt-5 block cursor-pointer font-bold text-black/85 decoration-2 underline-offset-4 hover:underline md:mt-[10px]"
          >
            {option}
          </a>
        ))}
      </ul>
      {extraOptions && (
        <ul>
          <h5 className="mb-7 cursor-text font-semibold text-black/70 max-md:hidden">
            Location Services
          </h5>
          {extraOptions.options2.map((option) => (
            <a
              className="mt-5 block cursor-pointer font-bold text-black/85 decoration-2 underline-offset-4 hover:underline md:mt-[10px]"
              key={option}
            >
              {option}
            </a>
          ))}
        </ul>
      )}
      {extraOptions && (
        <ul>
          <h5 className="mb-7 cursor-text font-semibold text-black/70 max-md:hidden">Company</h5>
          {extraOptions.options3.map((option) => (
            <a
              className="mt-5 block cursor-pointer font-bold text-black/85 decoration-2 underline-offset-4 hover:underline md:mt-[10px]"
              key={option}
            >
              {option}
            </a>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default MenuOptions;
