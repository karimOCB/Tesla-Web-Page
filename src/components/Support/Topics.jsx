import React from "react";
import { topicCategories } from "../../constants";
import { trendingTopics } from "../../constants";

const topics1 = topicCategories[0].topics;
const topics2 = topicCategories[1].topics;

const Topics = ({ selectedTopic, setSelectedTopic }) => {
  return (
    <div className="mb-14 flex basis-11/12 flex-col lg:basis-4/6">
      <h1 className="h5 mt-20 text-center text-[24px] font-bold sm:pl-5 sm:text-[27px] lg:text-left">
        {" "}
        Trending Topics{" "}
      </h1>
      <ul className="mt-4 flex justify-center text-nowrap text-center text-[12px] font-bold max-lg:grid max-lg:grid-cols-2 sm:text-[13px]">
        {trendingTopics.map((topic) => (
          <li
            key={topic}
            className="cursor-pointer rounded-md px-5 py-2 transition-colors duration-700 hover:bg-black/15"
          >
            <a href="#">{topic}</a>
          </li>
        ))}
      </ul>
      <div className="mt-11 flex flex-col">
        <div className="flex">
          {topicCategories.map((item) => {
            const { id, category } = item;
            return (
              <div className="w-full" key={id}>
                <div onClick={() => setSelectedTopic(category)} className={`flex basis-1/2`}>
                  <div
                    className={`flex w-full cursor-pointer flex-col items-center hover:[&>hr]:bg-black/65 ${selectedTopic === category ? "rounded-lg bg-black/15 transition-all duration-300 [&>hr]:h-[3px] [&>hr]:bg-black/90" : ""}`}
                  >
                    <h3 className="pt-2 text-[17px] font-extrabold sm:pt-3 sm:text-[19px]">
                      {category}
                    </h3>
                    <hr className="mt-1 h-[2px] w-full bg-black/40 sm:mt-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex max-sm:flex-col">
          {selectedTopic === "Vehicles"
            ? topics1.map((topic) => {
                const { title, descriptions } = topic;
                return (
                  <div
                    key={title}
                    className="flex basis-1/3 flex-col items-center max-md:text-center"
                  >
                    <div>
                      <h4 className="mb-3 mt-8 font-extrabold sm:mb-6 sm:mt-11">{title}</h4>
                      <div className="flex flex-col gap-y-[7px] text-[13px] font-bold opacity-80 sm:gap-y-[11px]">
                        {descriptions.map((description) => (
                          <a key={description} className="cursor-pointer hover:underline">
                            {description}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            : topics2.map((topic) => {
                const { title, descriptions } = topic;
                return (
                  <div
                    key={title}
                    className="flex basis-1/3 flex-col items-center max-sm:text-center"
                  >
                    <div>
                      <h4 className="mb-3 mt-8 font-extrabold sm:mb-6 sm:mt-11">{title}</h4>
                      <div className="flex flex-col gap-y-[7px] text-[13px] font-bold opacity-80 sm:gap-y-[11px]">
                        {descriptions.map((description) => (
                          <a
                            key={description}
                            className="max-w-[188px] cursor-pointer hover:underline"
                          >
                            {description}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Topics;
