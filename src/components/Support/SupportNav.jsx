import { useState, useEffect } from "react";
import { supportNavItems, supportNavSideItems } from "../../constants";
import { TeslaSVG, supportNavHouse } from "../../assets/index";

const lupaSvg2 = `
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="20px" height="20px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;"
    xml:space="preserve" >
    <g>
      <g>
        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
          c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
        <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
          C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
          c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
          C318.424,257.208,257.206,318.416,181.956,318.416z"/>
        <path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"/>
      </g>
    </g>
  </svg>
`;

const SupportNav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div className="relative">
      <div className="relative flex items-end justify-center lg:items-center">
        <img
          src={supportNavHouse}
          className="relative -z-10 min-h-52 min-w-[1000px] overflow-x-hidden"
        />
        <input
          type="search"
          placeholder="Search Support"
          className={`absolute w-2/6 min-w-56 rounded-md border border-gray-600/80 bg-white/90 py-[6px] indent-12 placeholder:indent-12 placeholder:font-bold placeholder:italic placeholder:text-black/65 focus:outline-none max-lg:mb-14 lg:py-2`}
          style={{
            background: `url('data:image/svg+xml;utf8,${encodeURIComponent(lupaSvg2)}') no-repeat 3% 50%`,
            padding: "0 0 0 10",
            backgroundColor: "#ffffffee",
          }}
        />
      </div>
      <nav className="absolute left-0 top-0 flex w-full items-center justify-center bg-black/55 py-[10px] text-[12px] font-bold text-white">
        <a className="ml-7 basis-full" href="/">
          <TeslaSVG />
        </a>
        {screenWidth > 1024 ? (
          <>
            <ul className="z-50 flex text-nowrap">
              {supportNavItems.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer rounded-md px-2 py-2 transition-all duration-500 hover:bg-gray-400/30 hover:backdrop-blur-md min-[1200px]:px-3"
                >
                  <a>{item}</a>
                </li>
              ))}
            </ul>
            <ul className="z-50 mr-8 flex basis-full justify-end">
              {supportNavSideItems.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer rounded-md px-2 py-2 transition-all duration-500 hover:bg-gray-400/30 hover:backdrop-blur-md min-[1200px]:px-3"
                >
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mr-4 cursor-pointer rounded-md px-3 py-2 transition-all duration-500 hover:bg-gray-400/30 hover:backdrop-blur-md">
            Menu
          </div>
        )}
      </nav>
    </div>
  );
};

export default SupportNav;
