/* eslint-disable react/prop-types */
import React from "react";
import { ProductsItems, MenuOptions } from "../index";
import { ArrowSvg } from "../../assets";

const MenuOpen = ({ dialog, options, extraOptions, category, setBackArrow }) => {
  return (
    <div className="absolute left-0 top-0 flex w-screen cursor-default flex-col overflow-y-auto bg-white pb-14 pt-20 max-lg:h-screen lg:-z-10 lg:flex-row lg:pt-28">
      <span
        onClick={() => setBackArrow(true)}
        className="absolute left-5 top-5 z-50 rotate-180 cursor-pointer rounded-md p-2 transition duration-500 hover:bg-gray-900/10 lg:hidden"
      >
        <ArrowSvg />
      </span>
      <div className="absolute top-6 flex w-screen justify-center lg:hidden">{category}</div>
      {dialog && <ProductsItems dialog={dialog} options={options} />}
      <div
        className={`${options && dialog ? "border bg-black/10 max-lg:my-8 max-lg:ml-10 max-lg:mr-16" : ""}`}
      />
      {options && <MenuOptions options={options} extraOptions={extraOptions} />}
    </div>
  );
};

export default MenuOpen;
