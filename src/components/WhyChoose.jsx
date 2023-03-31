import React from 'react';
import airlineIcon from '../assets/airline-icon.png';
import { IconWithText, TitleTag } from '../common';
import deliveryIcon from '../assets/delivery-icon.png';
import globeIcon from '../assets/world-icon.png';
import clockIcon from '../assets/clock-icon-2.png';
import shipIcon from '../assets/ship-icon2.png';
import commsIcon from '../assets/comms-icon.png';
import pricingIcon from '../assets/pricing-icon.png';

const iconTextData = [
  {
    icon: deliveryIcon,
    text: 'Safe Package',
  },
  {
    icon: globeIcon,
    text: 'Global Tracking',
  },
  {
    icon: clockIcon,
    text: 'In Time Delivery',
  },
  {
    icon: shipIcon,
    text: 'Ship Everyware',
  },
  {
    icon: commsIcon,
    text: '24/7 Support',
  },
  {
    icon: pricingIcon,
    text: 'Transparant Pricing',
  },
];

const WhyChoose = () => {
  return (
    <div className="h-[89.7rem] flex ">
      {/* left */}
      <div className="relative bg-primary-200 flex-1 ">
        <div
          className="bg-cover bg-no-repeat bg-center h-[61rem]  w-[82.9rem] absolute top-[50%] transform translate-y-[-50%] left-[8rem] flex justify-center items-end bg-blend-lighten "
          style={{
            backgroundImage:
              "linear-gradient(64.04deg, #070F3C 17.44%, rgba(18, 42, 171, 0) 103.55%), url('/src/assets/airline.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className=" w-[41.7rem] h-[13.9rem] flex items-center justify-center gap-[3rem] "
            style={{
              backgroundImage: "url('/src/assets/airline.png')",
              background:
                'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
            }}
          >
            <img src={airlineIcon} alt="icon" />
            <div className="text-[2.5rem] leading-[3rem] text-primary-200 ">
              <p>Moving your products</p>
              <p>acros borders</p>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="bg-secondary-100 flex-1 flex justify-center items-center  ">
        <div className="">
          <div className="w-[43.8rem]">
            {' '}
            <TitleTag
              heading="Why Choose"
              text="We create opportunity to reach potential"
            />
          </div>
          <p className="w-[48.6rem] font-[500] text-[1.6rem] leading-[2.4rem] mt-[1.8rem] ">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{' '}
          </p>
          <div className="grid grid-cols-2 gap-[2rem] mt-[6rem] ">
            {iconTextData.map((item) => (
              <IconWithText item={item} key={item.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
