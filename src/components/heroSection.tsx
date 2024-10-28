import Button from "@mui/material/Button";
import Image from "next/image";
import FlipWords from "./ui/flip-words"

const HeroSection = () => {
  return (
    <div className="pt-4">

    <div className="flex flex-col justify-center  align-middle text-center ">
    <div className="flex text-center align-middle justify-center">
       
        <h1 className="text-3xl font-semibold text-gray-500">WE ARE HERE TO</h1>
        <FlipWords words={["LIFT","BOOST","ELEVATE"]} duration={1000} className="text-3xl w-24 font-semibold "/>
       
        </div>
        <h1 className="text-3xl font-semibold text-gray-500">SCHOLAR</h1>
       
       
      </div>
    <div className="hero flex  flex-row items-centermt-[10vh]flex p-[3rem]  h-[75vh] flex-wrap ">
      
      <div className="hero-text h-auto rounded-l-[14px]  backdrop-blur-[2px]  lg:shadow-none lg:rounded-none flex-1  p-[1rem] w-[40%] ">
        <div className="text text-[1.5rem] mb-[1.5rem] mt-[2rem] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          recusandae, necessitatibus adipisci vitae quam placeat. Ducimus
          dolorum mollitia rerum voluptas iusto itaque similique, nam
          consequuntur dolorem incidunt atque cumque ab?
        </div>
        <div className="buttons mt-[1rem]">
          <Button variant="contained" size="medium" className="hero-btn text-[1rem]">
            Start
          </Button>{" "}
          &nbsp;&nbsp;
          <Button variant="contained" size="medium" className="hero-btn text-[1rem]">
            Support
          </Button>
        </div>
      </div>

      <div className="hero-image flex-1 relative rounded-[0_14px_14px_0] overflow-hidden hidden md:block  ">
        <Image
          src="/images/heroImg.jpg"
          alt="Hero Section"
          layout="fill"
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
