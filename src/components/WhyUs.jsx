import React from 'react';
import { Button, IconWithText, TitleTag } from '../common';
import deliveryIcon from '../assets/delivery-icon.png';
import cashIcon from '../assets/cash-icon.png';
import whyUsImg from '../assets/whyus-img.png';
import transport from '../assets/transport.png';
import transport1 from '../assets/transport-1.png';
import transport2 from '../assets/transport-2.png';
import transport3 from '../assets/transport-3.png';
import transport4 from '../assets/transport-4.png';
import bg from '../assets/whyus-bg.png';

const data = [
  {
    icon: deliveryIcon,
    text: 'Delivery on Time',
  },
  {
    icon: cashIcon,
    text: 'Optimize Travel Cost',
  },
];

const cardData = [
  {
    image: transport,
    heading: 'Liquid Transportation',
    subHeading: 'Premium Tankers',
  },
  {
    image: transport1,
    heading: 'Packaging Solutions',
    subHeading: 'Warehouse Management',
  },
  {
    image: transport2,
    heading: 'Contract Logistics',
    subHeading: 'Road Transportation',
  },
  {
    image: transport3,
    heading: 'Warehouse & Distribution',
    subHeading: 'Large Warehouse',
  },
  {
    image: transport4,
    heading: 'Specialized Transport',
    subHeading: 'Ocean Transports',
  },
];

const WhyUs = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center h-[50.4rem]  w-full "
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="custom-container-one bg-white mt-[-11rem] py-[8.5rem] px-[9rem]  ">
        <div className="flex">
          <div className="w-[47.2rem] ">
            <TitleTag
              heading="Why Us"
              text="We provide full range global logistics solution"
            />
            <p className="font-[500] text-[1.6rem] leading-[2.4rem] mt-[1.2rem] ">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="font-[500] text-[1.6rem] leading-[2.4rem] mt-[2.2rem]">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="flex flex-col gap-[2.2rem] mt-[2.5rem] ">
              {data.map((item) => (
                <IconWithText item={item} key={item.text} />
              ))}
            </div>
          </div>
          <img src={whyUsImg} alt="why us" />
        </div>

        {/*  */}
        <div className="h-[14.3rem] mt-[8.6rem] flex  border border-transparent border-y-[#D5D5D5] ">
          <div className="flex flex-1 gap-[1.6rem] justify-center items-center border border-transparent border-r-[#D5D5D5] ">
            <p className="font-[600] text-[5rem] leading-[5.9rem] text-headingFont ">
              1294
            </p>
            <div className="bg-primary-100 h-[1.7rem] w-[1.7rem] "></div>
            <p className="text-[2rem] leading-[1.8rem]">Delivered Packages</p>
          </div>
          <div className="flex flex-1 items-center justify-center gap-[1.6rem] ">
            <p className="font-[600] text-[5rem] leading-[5.9rem] text-headingFont ">
              1294
            </p>
            <div className="bg-primary-100 h-[1.7rem] w-[1.7rem] "></div>
            <p className="text-[2rem] leading-[1.8rem]">Delivered Packages</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="custom-container-two">
        <h2 className="font-[600] text-[3.5rem] leading-[4.1rem] text-headingFont text-center mb-[3.5rem] ">
          Transporting Across The World
        </h2>
        {/* cards */}
        <div className="flex gap-[1.8rem] ">
          {cardData.map((card) => (
            <Card card={card} key={card.heading} />
          ))}
        </div>
      </div>
      <div>
        <div
          className="bg-gradient-to-r from-ffb629 to-ffd7a6 h-[40rem] wh-[40rem] w-full mt-[-11rem] flex justify-center items-center "
          style={{
            backgroundImage:
              'linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)',
          }}
        >
          <div className="inline-block ">
            <Button bg="blue">More Work</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

const Card = ({ card }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-[40.7rem]  w-[32rem]  flex items-end  "
      style={{ backgroundImage: `url(${card.image})` }}
    >
      <div
        className=" w-full pl-[2.5rem] pb-[2rem] pt-[20rem]  bg-gradient-to-r from-[#091242] via-[#3c3c3c] bg-blend-multiply "
        style={{
          backgroundImage:
            'linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)',
        }}
      >
        <h3 className="font-[500] text-[2rem] leading-[2.4rem] text-white">
          {card.heading}
        </h3>
        <p className="font-[500] text-[1.6rem] leading-[2.4rem] text-primary-100">
          {card.subHeading}
        </p>
      </div>
    </div>
  );
};
