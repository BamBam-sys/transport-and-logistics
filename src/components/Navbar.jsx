import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className="bg-primary-200 bg-opacity-25">
      <div className="custom-container-one flex justify-between items-center ">
        {/* left */}
        <div className="flex gap-[3rem] text-white font-[600] text-[1.6rem] leading-[2.2rem]  ">
          <div className="pr-[3rem] border-r-[1px] border border-transparent  border-r-white border-opacity-20">
            <a
              href="#"
              className="border-b-[2px] border border-transparent  border-b-white pb-[3rem] "
            >
              Home
            </a>
          </div>
          <div className="pr-[3rem] border-r-[1px] border border-transparent  border-r-white border-opacity-20 ">
            <a href="#"> About</a>
          </div>
          <div className="pr-[3rem] border-r-[1px] border border-transparent  border-r-white border-opacity-20  flex items-center gap-[0.5rem] ">
            <a href="#"> Pages</a>
            <BiChevronDown className="text-[2rem]" />
          </div>
          <div className="">
            <a href="#"> Contact</a>
          </div>
        </div>

        {/* right */}
        <div className="flex gap-[5rem]">
          <div className="flex gap-[2.4rem] py-[3rem]  text-white">
            <AiOutlineInstagram className="text-[2.5rem]  " />
            <CiFacebook className="text-[2.5rem]  " />
            <AiOutlineTwitter className="text-[2.5rem]  " />
            <AiFillLinkedin className="text-[2.5rem]  " />
          </div>

          {/*  */}
          <div className="bg-white py-[2.8rem] px-[5.2rem] font-[600] text-[1.6rem] text-[#23212A] ">
            Request Quote
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
