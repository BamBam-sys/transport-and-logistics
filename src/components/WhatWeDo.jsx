import React from 'react';
import { TitleTag } from '../common';
import shipIcon from '../assets/ship-icon.png';
import airplaneIcon from '../assets/airplane.png';
import warehouseIcon from '../assets/warehouse-icon.png';
import truckIcon from '../assets/truck-icon.png';

const serviceData = [
  {
    title: 'Sea Transport Services',
    desc: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: shipIcon,
  },
  {
    title: 'Warehousing Services',
    desc: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: warehouseIcon,
  },
  {
    title: 'Air Fright Services',
    desc: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: airplaneIcon,
  },
  {
    title: 'Local Shipping Services',
    desc: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: truckIcon,
  },
];

const WhatWeDo = () => {
  return (
    <div className="bg-white pt-[7.2rem] p-[13.2rem] ">
      <div className="custom-container-one flex gap-[4.2rem] ">
        <div className="w-[29.4rem]">
          <TitleTag
            text="Safe & Reliable Cargo Solutions"
            heading="What We Do"
          />
        </div>
        <div className="grid grid-cols-2 gap-[7rem]  ">
          {serviceData.map((service) => (
            <Service service={service} key={service.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

const Service = ({ service }) => {
  return (
    <div className="flex ">
      <div className="pr-[4.2rem] ">
        <img src={service.icon} alt="icon" />
      </div>
      {/*  */}
      <div className="w-[1px] h-[10.5rem] bg-[#D8D8D8]  "></div>
      <div className="pl-[2.5rem]   ">
        <h3 className="text-[2.4rem] text-headingFont leading-[3rem] font-[400] pb-[1.3rem] ">
          {service.title}
        </h3>
        <p className="font-[500] text-[1.6rem] leading-[2.4rem]  w-[27rem] ">
          {service.desc}
        </p>
      </div>
    </div>
  );
};
