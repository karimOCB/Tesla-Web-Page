import { useState } from "react";
import { Topics, Guide, ContactUs } from "../index";

const TrendingTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState("Vehicles");

  return (
    <main className="flex flex-col bg-[#eeeeee]">
      <div className="flex flex-row justify-center">
        <div className="flex basis-0 lg:basis-1/6"></div>
        <Topics selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        <div className="flex basis-0 lg:basis-1/6"></div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex basis-0 lg:basis-1/6"></div>
        <Guide />
        <div className="flex basis-0 lg:basis-1/6"></div>
      </div>
      <ContactUs />
    </main>
  );
};

export default TrendingTopics;
