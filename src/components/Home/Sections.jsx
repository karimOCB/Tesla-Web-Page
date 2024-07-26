/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { CybertruckSVG } from "../../assets";
import { sectionsInfo } from "../../constants";
import parse from "html-react-parser";

const Sections = ({ screenWidth }) => {
  return (
    <main>
      {sectionsInfo.map((item) => {
        const { title, image, image2, description, price, button1Text, button2Text, white } = item;
        return (
          <section key={title} className="relative h-screen">
            <div className="absolute bottom-0 top-0 -z-10 h-full w-full">
              <img
                src={screenWidth > 640 ? image : image2}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex h-full flex-col items-center">
              <header className={`pt-44 text-center sm:pt-32 ${white ? "text-white" : ""} `}>
                {title === "CybertruckSVG" ? (
                  <CybertruckSVG />
                ) : (
                  <h1 className={`h2 font-bold`}>{title}</h1>
                )}
                <h2 className="h5 font-bold">{parse(description)}</h2>
                <h2
                  className={`h5 cursor-pointer font-bold ${white ? "text-slate-100/95 hover:text-white" : "text-gray-700 hover:text-gray-800"} underline decoration-current decoration-1 underline-offset-[6px] transition-all duration-500 hover:decoration-2`}
                >
                  {parse(price)}
                </h2>
              </header>
              <footer className="flex grow pb-28 text-center text-sm font-bold max-sm:w-10/12 max-sm:flex-col max-sm:content-end max-sm:justify-end sm:basis-full sm:items-end sm:space-x-6 [&>a]:cursor-pointer [&>a]:rounded-md [&>a]:px-24 [&>a]:py-[10px] [&>a]:transition [&>a]:duration-500">
                <a className="bg-slate-200 hover:bg-slate-300/95 hover:text-black">{button1Text}</a>
                {button2Text && (
                  <a className="bg-gray-900/95 text-gray-100 hover:bg-gray-700 max-sm:mt-3">
                    {button2Text}
                  </a>
                )}
              </footer>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Sections;
