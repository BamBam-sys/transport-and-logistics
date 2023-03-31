import React from 'react';

const Button = ({ children, bg }) => {
  return (
    <div
      className={`relative overflow-hidden font-[600] text-[1.6rem] leading-[2.2rem]  py-[1.9rem] px-[5rem] ${
        bg === 'yellow' ? 'bg-primary-100' : 'bg-primary-200'
      }  after:content-[' '] ${
        bg === 'yellow' ? 'after:bg-white' : 'after:bg-[#1f2a69]'
      } after:h-[5.2rem] after:w-[5.2rem] after:absolute after:bottom-[-50%] after:right-[-10%] after:rounded-[50%] hover:after:scale-[3.5] after:z-[1] transition cursor-pointer`}
    >
      <p
        className={`relative z-[2] text-${
          bg === 'yellow' ? '[#23212a]' : 'white'
        } `}
      >
        {children}
      </p>
    </div>
  );
};

export default Button;
