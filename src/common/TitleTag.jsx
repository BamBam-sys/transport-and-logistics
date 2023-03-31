import React from 'react';

const TitleTag = ({ heading, text }) => {
  return (
    <div>
      <div className="text-[1.4rem] text-headingFont leading-[1.7rem] border border-transparent border-l-[4px] border-l-primary-100 px-[0.9rem] py-[0.3rem]  bg-[#E8E8E8] bg-opacity-50  mb-[2.5rem] inline-block">
        {heading}
      </div>

      <h2 className="font-[600] text-[3.5rem] leading-[4.1rem] text-headingFont   ">
        {text}
      </h2>
    </div>
  );
};

export default TitleTag;
