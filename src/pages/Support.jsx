import { React } from "react";
import { SupportNav, TrendingTopics, SupportFooter } from "../components/index";

const Support = () => {

  document.body.style.overflow = "auto";

  return (
    <>
      <SupportNav />
      <TrendingTopics />
      <SupportFooter />
    </>
  );
};

export default Support;
