/* eslint-disable react/react-in-jsx-scope */
import { Navbar, Footer, Sections } from "../components/index";
import { useEffect, useState } from "react";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <>
      <Navbar
        screenWidth={screenWidth}
        setScreenWidth={setScreenWidth}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Sections screenWidth={screenWidth} showMenu={showMenu} />
      <Footer />
    </>
  );
};

export default Home;
