/* eslint-disable react/prop-types */
import React from "react";
import { items } from "../../constants";
import { MenuOpen } from "../index";

const MenuProductList = ({ hoveredItem, handleMouseEnter, handleMouseLeave }) => {
  return (
    <ul className="flex">
      {items.map(({ category, dialog, options, extraOptions }) => (
        <li
          key={category}
          onMouseOver={() => handleMouseEnter(category)}
          onMouseLeave={() => handleMouseLeave()}
          className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-gray-900/10 xl:px-4"
        >
          {hoveredItem === category && (
            <MenuOpen
              key={category}
              dialog={dialog}
              options={options}
              extraOptions={extraOptions}
            />
          )}
          {category}
        </li>
      ))}
    </ul>
  );
};

export default MenuProductList;
