import React from 'react';
import clockIcon from '../assets/clock-Icon.png';
import msgIcon from '../assets/msg-Icon.png';
import phoneIcon from '../assets/phone-Icon.png';
import img1 from '../assets/contact-img1.png';
import img2 from '../assets/contact-img2.png';
import img3 from '../assets/contact-img3.png';
import img4 from '../assets/contact-img4.png';

const inputs = [
  {
    name: 'name',
    placeholder: 'Your name*',
  },
  {
    name: 'email',
    placeholder: 'Email*',
  },
  {
    name: 'number',
    placeholder: 'Phone Number*',
  },
  {
    name: 'city',
    placeholder: 'City*',
  },
];

const images = [img1, img2, img3, img4];

const Contact = () => {
  return (
    <div className="bg-primary-200 py-[14.3rem]  ">
      <div className="custom-container-one text-white ">
        <div className="text-[1.4rem] text-white leading-[1.7rem] border border-transparent border-l-[4px] border-l-primary-100 px-[0.9rem] py-[0.3rem]  bg-[#E8E8E8] bg-opacity-10  mb-[2.5rem] inline-block">
          Contact
        </div>

        {/*  */}
        <div className="flex justify-between items-start ">
          {/* left */}
          <div className="">
            <h2 className="font-[600] text-[3.5rem] leading-[4.1rem]  ">
              Get in touch with us{' '}
            </h2>
            <p className="w-[35.3rem]  font-[500] text-[1.6rem] leading-[2.4rem] mt-[0.3rem] ">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>

            <div className="flex flex-col gap-[3rem]  font-[500] text-[1.4rem] leading-[1.9rem] mt-[3.2rem] ">
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
          {/* right */}

          <div className="">
            <div className="grid grid-cols-2 w-full gap-x-[2.8rem] gap-y-[3.1rem] ">
              {inputs.map((input) => (
                <input
                  type="text"
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  className="bg-transparent text-white text-[2rem] leading-[1.8rem] border border-[#4E5683] px-[3rem] py-[2.1rem] placeholder:text-white "
                />
              ))}
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="bg-transparent text-white text-[2rem] leading-[1.8rem] border border-[#4E5683] px-[3rem] py-[2.1rem] placeholder:text-white w-full h-[15.4rem] mt-[3.1rem] "
            />
            <div
              className="inline-block mt-[3rem] py-[1.9rem] px-[3.4rem] text-[#23212A] font-[600] text-[1.6rem] leading-[2.2rem]  "
              style={{
                background:
                  'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
              }}
            >
              Submit Message
            </div>
          </div>
        </div>

        {/* images */}
        <div className="flex mt-[7rem] ">
          {images.map((image) => (
            <img src={image} alt="contactt" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
