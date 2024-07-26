/* eslint-disable react/prop-types */
import React from "react";

const MenuCrossSvg = ({ setShowMenu, setClickedItem }) => {
  return (
    <button
      className="fixed right-9 top-5 z-50 rounded-md p-2 transition duration-500 hover:bg-gray-900/10"
      onClick={() => {
        setShowMenu(false);
        setClickedItem(false);
      }}
    >
      <svg
        className="tds-icon tds-icon-close-small tds-icon--small tds-icon--small w-[18px]"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12.243 11.182a.75.75 0 1 1-1.06 1.06L8 9.062l-3.182 3.182a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L6.938 8 3.757 4.818a.75.75 0 1 1 1.06-1.06L8 6.938l3.182-3.182a.75.75 0 1 1 1.06 1.06L9.062 8z"
        ></path>
      </svg>
    </button>
  );
};

export default MenuCrossSvg;
