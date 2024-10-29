import Button from "@mui/material/Button";
import Image from "next/image";
import FlipWords from "./ui/flip-words"
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="pt-4">

      <div className="flex flex-col justify-center  align-middle text-center ">
        <div className="flex text-center align-middle justify-center">

          <h1 className="text-3xl font-semibold text-gray-500">WE ARE HERE TO</h1>
          <FlipWords words={["LIFT", "BOOST", "ELEVATE"]} duration={1000} className="text-3xl w-24 font-semibold " />

        </div>
        <h1 className="text-3xl font-semibold text-gray-500">SCHOLAR</h1>


      </div>
      <div className="hero flex flex-row p-[3rem] h-[75vh] flex-wrap">

        <div className="hero-text h-auto rounded-l-[14px] backdrop-blur-[3px]  lg:shadow-none lg:rounded-none flex-1  p-[1rem] md:w-[40%] w-[65%] ">
          <div className="text text-[1.25rem] md:text-[1.5rem] mb-[1.5rem] mt-[2rem] font-medium text-center">
            &quot;Empowering dreams through education. Join us in bridging gaps for deserving students. Every contribution brings them closer to quality learning, brighter futures, and lasting impact. Be a part of ScholarLift and make education accessible for all.Join us on this journey to empower dreams, uplift potential, and make a difference in the lives of tomorrow’s leaders.&quot;
          </div>
          <div className="buttons mt-[1rem] text-center">
            <Link href={'/pages/start'}>
              <Button variant="contained" size="medium" className="hero-btn text-[1rem]" sx={{ backgroundColor: '#9C3353', color: '#FFFFFF' }}>
                Start
              </Button>{" "}
            </Link>

            &nbsp;&nbsp;
            <Link href={'/pages/ourstories'}>
              <Button variant="contained" size="medium" className="hero-btn text-[1rem]" sx={{ backgroundColor: '#9C3353', color: '#FFFFFF' }}>
                Support
              </Button>
            </Link>

          </div>
        </div>

        <div className="hero-image flex-1 relative rounded-[0_14px_14px_0] overflow-hidden hidden md:block  ">
          <Image
            src="/images/heroImg.jpg"
            alt="Hero Section"
            fill
            objectFit="cover"
            className="hero-img w-[100%] h-[100%] "
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
