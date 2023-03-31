import React from 'react';
import { TitleTag } from '../common';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import customer1 from '../assets/customer-1.png';
import customer2 from '../assets/customer-2.png';
import quotes from '../assets/qoutes-icon.png';
import stars from '../assets/star.png';

const Testimonial = () => {
  return (
    <div className="bg-white pt-[9.8rem] pb-[10rem]  ">
      <div className="custom-container-one">
        <div className="flex justify-between mb-[4rem]">
          <TitleTag heading="Testimonial" text="What Our Customers Say" />

          <div className="flex items-center gap-[1rem] ">
            <img src={leftArrow} alt="left arrow" />
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
        {/* cards */}
        <div className="flex">
          {/* card */}
          <div className="px-[7.2rem] py-[6.2rem] bg-secondary-100 ">
            {/* top */}
            <div className="flex justify-between items-center ">
              <div className="flex gap-[1rem] items-center">
                <img src={customer1} className="rounded-[50%] " alt="user" />
                <div className="">
                  <h4 className="font-[500] text-[2rem] leading-[2.4rem] text-primary-200 ">
                    Kathleen Smith
                  </h4>
                  <p className="font-[500] text-[1.6rem] leading-[2.4rem] text-primary-200">
                    Fuel Company
                  </p>
                </div>
              </div>

              <img src={quotes} alt="icon" />
            </div>

            {/* mid */}
            <p className="mt-[3.3rem] font-[500] text-[1.6rem] leading-[2.4rem] ">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            {/* bottom */}
            <img className="mt-[3.2rem]" src={stars} alt="rating" />
          </div>

          {/* card */}
          <div className="px-[7.2rem] py-[6.2rem] bg-primary-200 text-white ">
            {/* top */}
            <div className="flex justify-between items-center ">
              <div className="flex gap-[1rem] items-center">
                <img src={customer2} className="rounded-[50%] " alt="user" />
                <div className="">
                  <h4 className="font-[500] text-[2rem] leading-[2.4rem]  ">
                    John Martin
                  </h4>
                  <p className="font-[500] text-[1.6rem] leading-[2.4rem] ">
                    Restoration Company
                  </p>
                </div>
              </div>

              <img src={quotes} alt="icon" />
            </div>

            {/* mid */}
            <p className="mt-[3.3rem] font-[500] text-[1.6rem] leading-[2.4rem] ">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            {/* bottom */}
            <img className="mt-[3.2rem]" src={stars} alt="rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
