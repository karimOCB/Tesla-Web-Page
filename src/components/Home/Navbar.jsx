/* eslint-disable react/prop-types */
import { useState, useEffect, React } from "react";
import { TeslaSVG } from "../../assets";
import { actionsList } from "../../constants";
import { HamburguerMenu, MenuProductList } from "../index";
import { Link } from "react-router-dom";

const Navbar = ({ screenWidth, setScreenWidth, showMenu, setShowMenu }) => {
  const [position, setPosition] = useState(window.scrollY);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredItem(category);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      let classList = document.querySelector("nav").classList;
      if (position < window.scrollY || window.scrollY === 0) {
        setPosition(window.scrollY);
        classList.remove("fixed", "bg-slate-100/95");
        classList.add("absolute");
      } else if (position > window.scrollY) {
        classList.add("fixed", "bg-slate-100/95");
        classList.remove("absolute");
        setPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  useEffect(() => {
    const handleWidthChange = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, [screenWidth]);

  return (
    <nav className="absolute top-0 z-10 flex w-full items-center justify-between py-4 text-[14.5px] font-[750]">
      <a className="flex basis-full pl-12 hover:cursor-pointer" href="#">
        <TeslaSVG />
      </a>
      {screenWidth > 1024 ? (
        <>
          <MenuProductList
            hoveredItem={hoveredItem}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          <ul className="flex basis-full justify-end pr-8">
            {actionsList.map(({ action, path }) => (
              <li
                key={action}
                className="relative cursor-pointer rounded-md px-2 py-1 duration-500 hover:bg-gray-900/10 xl:px-4"
              >
                {action}
                {path && <Link to={path} className="absolute left-0 top-0 h-full w-full"></Link>}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div
            onClick={() => setShowMenu(true)}
            className="mr-4 cursor-pointer rounded-md bg-gray-800/5 px-5 py-2 text-[15px] duration-500 hover:bg-gray-900/15"
          >
            Menu
          </div>
          {showMenu && <HamburguerMenu setShowMenu={setShowMenu} />}
        </>
      )}
    </nav>
  );
};

export default Navbar;
