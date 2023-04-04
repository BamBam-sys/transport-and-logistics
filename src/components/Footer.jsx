import React from 'react';
import brandLogo from '../assets/brand-logo.png';
import msgIcon from '../assets/msg-Icon.png';
import phoneIcon from '../assets/phone-Icon.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import bg from '../assets/footer-bg.png';

const Footer = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[41.2rem]  w-full "
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="bg-primary-200 pb-[9.8rem] ">
        <div
          className=" "
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="custom-container-one text-white grid grid-cols-4 gap-x-[5rem] h-[100%] ">
            <div className="bg-primary-200 pl-[4.5rem] w-[31.9rem] py-[4.4rem] ">
              <img src={brandLogo} alt="" />
            </div>
            <div className="text-[2.5rem] font-[500] leading-[3rem] justify-self-center py-[4.4rem] ">
              Pages
            </div>
            <div className="text-[2.5rem] font-[500] leading-[3rem] justify-self-center py-[4.4rem] ">
              Utility
            </div>
            <div className="text-[2.5rem] font-[500] leading-[3rem] justify-self-start py-[4.4rem] ">
              Subscribe
            </div>
          </div>
        </div>
        {/*  */}
        <div className="custom-container-one text-white grid grid-cols-4  mt-[3rem] ">
          {/* brand */}
          <div className="pl-[4.5rem] ">
            <p className="text-[1.6rem] font-[500] leading-[2.4rem] mb-[3.3rem] ">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div className="flex flex-col gap-[3.9rem] font-[500] text-[1.4rem] leading-[1.9rem] ">
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

          {/* pages */}
          <ul className="flex flex-col gap-[1.2rem] justify-self-center text-[1.6rem] font-[500] leading-[4rem] ">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Project</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

          {/* utility */}
          <ul className="flex flex-col gap-[1.2rem] justify-self-center text-[1.6rem] font-[500] leading-[4rem]">
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licenses</li>
            <li>Protected</li>
            <li>Not Found</li>
          </ul>

          {/* sub */}
          <div className="justify-self-start">
            <input
              type="text"
              placeholder="Email here*"
              className="bg-transparent border border-[#4E5683] w-[31.7rem] py-[2.1rem] px-[3rem]   "
            />
            <div className="flex items-center gap-[1.5rem] ">
              <div
                className="inline-block py-[1.9rem] px-[3.4rem] text-[#23212A] font-[600] text-[1.6rem] leading-[2.2rem]  "
                style={{
                  background:
                    'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
                }}
              >
                Send Now
              </div>
              <div className="flex gap-[2rem] py-[3rem]  text-white">
                <BsFacebook className="text-[2.5rem]  " />
                <AiOutlineTwitter className="text-[2.5rem]  " />
                <AiFillLinkedin className="text-[2.5rem]  " />
              </div>{' '}
            </div>
          </div>
        </div>
        <div className="  mt-[4.8rem] border border-transparent border-t-[#4E5683] ">
          <div className="custom-container-one flex items-center justify-between py-[2rem] ">
            <p className="font-[500] text-[1.6rem] leading-[4rem] ">
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </p>
            <div className="flex gap-[1.5rem]  text-[1.6rem] leading-[4rem]">
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
              <p>Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <p className="text-[#E8E8E8] font-[500]  leading-[2.4rem] w-[31.9rem] ">
  Leverage agile frameworks to provide a robust synopsis for strategy
  collaborative thinking to further the overall value proposition.
</p>; */
}
