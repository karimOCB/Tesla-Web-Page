/* eslint-disable react/prop-types */
import { React, useState, useEffect } from "react";
import { MenuOpen } from "../index";
import { actionsList, items } from "../../constants";
import { ArrowSvg, MenuCrossSvg } from "../../assets";
import { Link } from "react-router-dom";

const HamburguerMenu = ({ setShowMenu }) => {
  const [clickedItem, setClickedItem] = useState(null);
  const [backArrow, setBackArrow] = useState(false);

  useEffect(() => {
    backArrow && setClickedItem(null);
    setBackArrow(false);
  }, [backArrow]);

  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-full cursor-default flex-col bg-white">
      <MenuCrossSvg setShowMenu={setShowMenu} setClickedItem={setClickedItem} />
      <ul className="mx-7 mt-28 flex w-full flex-col">
        {items.map(({ category, dialog, options, extraOptions, arrow }) => (
          <li
            key={category}
            onClick={() => setClickedItem(category)}
            className="mb-4 mr-14 flex cursor-pointer items-center justify-between rounded-md py-4 pl-4 text-lg duration-500 hover:bg-gray-900/10"
          >
            {clickedItem === category && (
              <MenuOpen
                key={category}
                category={category}
                dialog={dialog}
                options={options}
                extraOptions={extraOptions}
                setBackArrow={setBackArrow}
              />
            )}
            {category}
            {arrow && !clickedItem && <ArrowSvg mr={"mr-2"} />}
          </li>
        ))}
        {!clickedItem && actionsList.map(({ action, arrow, path }) => (
          <li
            key={action}
            className="relative mb-4 mr-14 flex cursor-pointer items-center justify-between rounded-md py-4 pl-4 text-lg duration-500 hover:bg-gray-900/10"
          >
            {action}
            {arrow && !clickedItem && <ArrowSvg mr={"mr-2"} />}
            {path && <Link to={path} className="absolute h-full w-full"></Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburguerMenu;
