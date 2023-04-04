import { Button } from '../common';
import Navbar from './Navbar';
import bg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-[87.5rem]  w-full "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* hero text */}
      <div className="custom-container-one mt-[17.6rem]  ">
        <p className="text-[1.4rem] text-white leading-[1.7rem] border border-transparent border-l-[4px] border-l-primary-100 px-[0.9rem] py-[0.3rem]  bg-primary-200 bg-opacity-50 inline-block">
          Logistics & Supply Chain Solutions
        </p>
        <h2 className="font-[700] text-[6rem] leading-[7.1rem] w-[55.4rem] text-white mt-[0.8rem] ">
          Your Gateway to any Destination in the World
        </h2>
        <p className="font-[500] text-[1.6rem] leading-[2.4rem] w-[57.1rem] text-white mt-[0.6rem] ">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
        </p>
        <div className="inline-block mt-[2.4rem] ">
          <Button bg="yellow">Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
