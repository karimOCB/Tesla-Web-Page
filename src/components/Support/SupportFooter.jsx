import { supportFooterLists } from "../../constants";

const SupportFooter = () => {
  return (
    <footer className="flex flex-col items-center bg-black/80 py-10 text-[11px]">
      <div className="flex justify-center gap-x-11 font-bold text-white">
        {supportFooterLists.map((list) => (
          <div key={list} className="flex flex-col gap-y-1">
            {list.map((item) => {
              return (
                <a key={item} className="cursor-pointer">
                  {item}
                </a>
              );
            })}
          </div>
        ))}
      </div>
      <hr className="my-6 w-[70%] opacity-30" />
      <span className="font-bold text-white">Tesla © 2024 | Privacy & Legal</span>
    </footer>
  );
};

export default SupportFooter;
