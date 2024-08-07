import React from "react";

const ArrowSvg = ({ mr }) => {
  return (
    <svg
      className={`"tds-icon tds-icon-chevron-small-90 tds-icon--small size-5 opacity-75" ${mr ? "mr-2" : ""}`}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M4.975 2.75a.748.748 0 0 1 1.281-.53l5.25 5.264a.75.75 0 0 1 0 1.06L6.283 13.78a.75.75 0 1 1-1.062-1.06l4.695-4.706L5.194 3.28a.75.75 0 0 1-.219-.53"
      ></path>
    </svg>
  );
};

export default ArrowSvg;
