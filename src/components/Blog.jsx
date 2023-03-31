import React from 'react';
import { Button, TitleTag } from '../common';
import calenderIcon from '../assets/calender-icon.png';

const Blog = () => {
  return (
    <div className="bg-white py-[9.8rem] ">
      <div className="">
        <div className="text-center">
          <TitleTag heading="Our Blog" text="Our Latest News" />
        </div>

        {/* cards */}
        <div className="flex flex-col items-center mt-[3.9rem] ">
          {/* card */}
          <div className=" pt-[2.9rem] pb-[3.5rem] border border-transparent border-t-[#D6D6D6] flex ">
            <div className=" flex gap-[2rem]  border border-transparent border-r-[#D6D6D6] pr-[2rem] ">
              <div
                className="bg-cover bg-no-repeat bg-center w-[45.3rem]  h-[30.8rem] "
                style={{ backgroundImage: "url('/src/assets/blog-img1.png')" }}
              ></div>
              <div className="flex flex-col items-center ">
                <img src={calenderIcon} alt="calender icon" />
                <p className="font-[600] text-[4rem] leading-[4.7rem] text-primary-200 ">
                  08
                </p>
                <p className="font-[500] text-[1.6rem] leading-[2.4rem] ">
                  september
                </p>
              </div>
            </div>
            {/*  */}
            <div className="pl-[2.9rem] w-[36rem] ">
              <h3 className="font-[500] text-[2.5rem] leading-[3rem] text-primary-200 mb-[1.6rem] ">
                Inland freight a worthy solution for your business
              </h3>
              <p className="font-[500] text-[1.6rem] leading-[2.4rem] mb-[1.8rem]">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className="list-disc pl-[2rem] font-[500] text-[1.6rem] leading-[2.7rem] text-primary-200 ">
                <li>Urgent transport solutions </li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          {/* card */}
          <div className=" pt-[2.9rem] pb-[3.5rem] border border-transparent border-t-[#D6D6D6] flex ">
            <div className=" flex gap-[2rem]  border border-transparent border-r-[#D6D6D6] pr-[2rem] ">
              <div
                className="bg-cover bg-no-repeat bg-center w-[45.3rem]  h-[30.8rem] "
                style={{ backgroundImage: "url('/src/assets/blog-img2.png')" }}
              ></div>
              <div className="flex flex-col items-center ">
                <img src={calenderIcon} alt="calender icon" />
                <p className="font-[600] text-[4rem] leading-[4.7rem] text-primary-200 ">
                  12
                </p>
                <p className="font-[500] text-[1.6rem] leading-[2.4rem] ">
                  september
                </p>
              </div>
            </div>
            {/*  */}
            <div className="pl-[2.9rem] w-[36rem] ">
              <h3 className="font-[500] text-[2.5rem] leading-[3rem] text-primary-100 mb-[1.6rem] ">
                Inland freight a worthy solution for your business
              </h3>
              <p className="font-[500] text-[1.6rem] leading-[2.4rem] mb-[1.8rem]">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className="list-disc pl-[2rem] font-[500] text-[1.6rem] leading-[2.7rem] text-primary-200 ">
                <li>Urgent transport solutions </li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          {/* card */}
          <div className=" pt-[2.9rem] pb-[3.5rem] border border-transparent border-t-[#D6D6D6] flex ">
            <div className=" flex gap-[2rem]  border border-transparent border-r-[#D6D6D6] pr-[2rem] ">
              <div
                className="bg-cover bg-no-repeat bg-center w-[45.3rem]  h-[30.8rem] "
                style={{ backgroundImage: "url('/src/assets/blog-img3.png')" }}
              ></div>
              <div className="flex flex-col items-center ">
                <img src={calenderIcon} alt="calender icon" />
                <p className="font-[600] text-[4rem] leading-[4.7rem] text-primary-200 ">
                  25
                </p>
                <p className="font-[500] text-[1.6rem] leading-[2.4rem] ">
                  september
                </p>
              </div>
            </div>
            {/*  */}
            <div className="pl-[2.9rem] w-[36rem] ">
              <h3 className="font-[500] text-[2.5rem] leading-[3rem] text-primary-200 mb-[1.6rem] ">
                Inland freight a worthy solution for your business
              </h3>
              <p className="font-[500] text-[1.6rem] leading-[2.4rem] mb-[1.8rem]">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className="list-disc pl-[2rem] font-[500] text-[1.6rem] leading-[2.7rem] text-primary-200 ">
                <li>Urgent transport solutions </li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          {/* card */}
          <div className=" pt-[2.9rem] pb-[3.5rem] border border-transparent border-t-[#D6D6D6]  border-b-[#D6D6D6] flex ">
            <div className=" flex gap-[2rem]  border border-transparent border-r-[#D6D6D6] pr-[2rem] ">
              <div
                className="bg-cover bg-no-repeat bg-center w-[45.3rem]  h-[30.8rem] "
                style={{ backgroundImage: "url('/src/assets/hero-bg.png')" }}
              ></div>
              <div className="flex flex-col items-center ">
                <img src={calenderIcon} alt="calender icon" />
                <p className="font-[600] text-[4rem] leading-[4.7rem] text-primary-200 ">
                  08
                </p>
                <p className="font-[500] text-[1.6rem] leading-[2.4rem] ">
                  september
                </p>
              </div>
            </div>
            {/*  */}
            <div className="pl-[2.9rem] w-[36rem] ">
              <h3 className="font-[500] text-[2.5rem] leading-[3rem] text-primary-200 mb-[1.6rem] ">
                Inland freight a worthy solution for your business
              </h3>
              <p className="font-[500] text-[1.6rem] leading-[2.4rem] mb-[1.8rem]">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.{' '}
              </p>
              <ul className="list-disc pl-[2rem] font-[500] text-[1.6rem] leading-[2.7rem] text-primary-200 ">
                <li>Urgent transport solutions </li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
          <div className="mt-[3.9rem]">
            <Button bg="blue">More Blog</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
