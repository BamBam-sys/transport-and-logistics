import React from 'react';
import { TitleTag } from '../common';
import rebecca from '../assets/rebecca.png';
import smith from '../assets/smith.png';
import jessica from '../assets/jessica.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const team = [
  {
    name: 'Jessica Arow',
    job: 'Designer',
    image: jessica,
    socials: [<AiOutlineTwitter />, <BsFacebook />, <AiOutlineInstagram />],
  },
  {
    name: 'Kathleen Smith',
    job: 'Designer',
    image: smith,
    socials: [
      <AiFillLinkedin />,
      <AiOutlineTwitter />,
      <BsFacebook />,
      <AiOutlineInstagram />,
    ],
  },
  {
    name: 'Rebecca Tylor',
    job: 'Designer',
    image: rebecca,
    socials: [<BsFacebook />, <AiOutlineInstagram />],
  },
];

const TheTransporters = () => {
  return (
    <div className="bg-white pt-[9.5rem] pb-[10.1rem]  ">
      <div className="custom-container-one ">
        <div className="text-center">
          <TitleTag text="Meet The Expert Team" heading="The Transporters" />
        </div>
        <div className="flex gap-[4rem] mt-[4rem] ">
          {team.map((member) => (
            <Member member={member} key={member.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTransporters;

const Member = ({ member }) => {
  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat bg-center h-[42.6rem]  w-[36.4rem] flex items-end "
        style={{ backgroundImage: `url(${member.image})` }}
      ></div>
      <div className="relative bg-primary-200 h-[11.2rem] w-full flex flex-col justify-end pl-[3.4rem] pb-[2rem] ">
        <h4 className="font-[500] text-[2rem] text-white leading-[2.4rem] ">
          {member.name}
        </h4>
        <h4 className="font-[500] text-[1.6rem] text-white leading-[2.4rem] ">
          {member.name}
        </h4>
        <div
          className="absolute top-[-30%] right-[0] flex gap-[2.4rem] py-[2rem] px-[1.7rem] text-[2.6rem]  text-primary-200"
          style={{
            backgroundImage: "url('/src/assets/airline.png')",
            background:
              'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
          }}
        >
          {...member.socials}
        </div>{' '}
      </div>
    </div>
  );
};
