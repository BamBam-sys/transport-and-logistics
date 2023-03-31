import React from 'react';

const IconWithText = ({ item }) => {
  return (
    <div className="flex items-center gap-[1.5rem] ">
      <img src={item.icon} alt="icon" />
      <p className="text-[1.8rem] leading-[3rem] text-headingFont ">
        {item.text}
      </p>
    </div>
  );
};

export default IconWithText;
