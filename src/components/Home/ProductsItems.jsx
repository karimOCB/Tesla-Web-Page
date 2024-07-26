/* eslint-disable react/prop-types */
import React from "react";

const ProductsItems = ({ dialog, options }) => {
  return (
    <section
      className={`flex ${dialog && options ? "basis-[67%] max-lg:ml-8 max-[475px]:ml-0 lg:justify-end lg:pl-14 xl:pl-32" : "w-full justify-center"}`}
    >
      <ol
        className={`flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-x-8 ${dialog && options ? "justify-center lg:mr-16 lg:justify-end" : ""}`}
      >
        {dialog.map((item) => {
          const { productName, image, text1, text2 } = item;
          return (
            <li
              key={productName}
              className="max-[475px]:flex max-[475px]:max-w-[330] max-[475px]:items-center max-[475px]:gap-x-4"
            >
              <img src={image} className="w-48 cursor-pointer sm:w-56" />
              <div className="max-lg:flex max-lg:flex-col max-[475px]:items-start">
                <h4 className="cursor-text text-center text-lg max-[475px]:text-left">
                  {productName}
                </h4>
                <div className="my-1 flex cursor-pointer justify-center gap-x-3 text-black/50 max-[475px]:text-sm">
                  {text1 && (
                    <a className="underline hover:text-black/70 hover:decoration-2">{text1}</a>
                  )}
                  {text2 && (
                    <a className="underline transition duration-300 hover:text-black/70 hover:decoration-2">
                      {text2}
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default ProductsItems;
