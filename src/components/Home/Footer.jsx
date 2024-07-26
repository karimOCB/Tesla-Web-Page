import { footerList, footerTexts } from "../../constants";
import parse from "html-react-parser";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-black text-center text-[12px] text-slate-200">
      <div className="max-w-[38rem] py-11 [&>p]:pb-3">{footerTexts.map((text) => parse(text))}</div>
      <footer className="pb-6">
        <ul>
          {footerList.map((item) => (
            <a
              key={item}
              href="#"
              className="px-2 transition-all duration-700 hover:bg-[#040404] hover:text-[12.2px] hover:text-white"
            >
              {item}
            </a>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
