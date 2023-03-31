import React from 'react';
import brandLogo from '../assets/brand-logo.png';
import clockIcon from '../assets/clock-Icon.png';
import msgIcon from '../assets/msg-Icon.png';
import phoneIcon from '../assets/phone-Icon.png';

const Header = () => {
  return (
    <div className="bg-primary-200 py-[6.2rem] ">
      <div className="custom-container-one flex justify-between items-center ">
        {/* brand logo */}
        <img src={brandLogo} alt="brand logo" />

        {/* info */}
        <div className="flex gap-[3.9rem] text-white font-[500] text-[1.4rem] leading-[1.9rem] ">
          {/* time */}
          <div className="flex items-center gap-[1.7rem] ">
            <img src={clockIcon} alt="clock icon" />
            <div>
              <p>Mon-Sat 9.00 -18.00</p>
              <p>Sunday closed</p>
            </div>
          </div>

          {/* email  */}
          <div className="flex items-center gap-[1.7rem] ">
            <img src={msgIcon} alt="message icon" />
            <div>
              <p>Email</p>
              <p>contact@logistics.com</p>
            </div>
          </div>

          {/* phone */}
          <div className="flex items-center gap-[1.7rem] ">
            <img src={phoneIcon} alt="phone icon" />
            <div>
              <p>Call Us</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
