import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-black/5 py-12 text-center text-[13px] font-bold [&>p]:mb-2 [&>p]:max-w-[600px] [&>p]:text-opacity-70">
      <h2 className="mb-5 text-[22px]"> Can&apos;t find what you are looking for? </h2>
      <p>
        You can now get answers to questions about your vehicle, account and more in the Tesla app.
        Select &apos;Need More Help&apos; which can be found within the &lsquo;Help&lsquo; menu
        under your profile.
      </p>
      <p>
        If you still can&apos;t find what you&apos;re looking for, contact customer support
        directly.
      </p>
      <a className="mt-2 cursor-pointer rounded-[4px] border border-solid border-black bg-white px-12 py-2 text-[11px] transition-all duration-300 hover:bg-black/80 hover:px-11 hover:py-[7.4px] hover:text-[12.2px] hover:font-extrabold hover:text-white">
        Contact Us
      </a>
    </div>
  );
};

export default ContactUs;
