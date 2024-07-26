import React from "react";
import { tutorialsAndOrdering } from "../../constants";

const Guide = () => {
  return (
    <div className="basis-[95%] lg:basis-4/6">
      {tutorialsAndOrdering.map((tutorial) => {
        const { image, title, text1, text2, link1, link2 } = tutorial;
        return (
          <div key={title} className="mb-14 flex items-center max-sm:flex-col">
            <img
              src={image}
              className="max-md:max-h-72 max-md:min-w-[320px] max-sm:max-w-[400px] md:min-w-[400px] md:max-w-[45%]"
            />
            <article className="flex flex-col max-sm:items-center max-sm:text-center sm:ml-10 [&>a]:mt-3 [&>a]:cursor-pointer [&>a]:text-xs [&>a]:font-bold [&>a]:underline [&>p]:mt-5 [&>p]:text-[13px] [&>p]:font-bold [&>p]:opacity-80 [&>p]:max-sm:max-w-[400px]">
              <h3 className="mb-1 mt-7 font-extrabold">{title}</h3>
              <p>{text1}</p>
              {link1.map((link) => (
                <a
                  key={link}
                  className="transition-colors duration-500 hover:text-blue-500"
                  href="#"
                >
                  {link}
                </a>
              ))}
              {text2 && <p>{text2}</p>}
              {link2 && <a href="#">{link2}</a>}
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Guide;
