import "./HeroSection.css";
import Button from "@mui/material/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero  flex p-[3rem] mt-[11vh] h-[75vh] flex-wrap ">
      <div className="hero-text flex-1 bg-white p-[1rem] rounded-[14px_0_0_14px] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] w-[40%] ">
        <div className="text text-[1.5rem] mb-[1.5rem] mt-[2rem] font-medium ">
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

      <div className="hero-image flex-1 relative rounded-[0_14px_14px_0] overflow-hidden bg-white shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]  ">
        <Image
          src="/images/heroImg.jpg"
          alt="Hero Section"
          layout="fill"
          objectFit="cover"
          className="hero-img w-[100%] h-[100%] p-[3rem]"
          priority={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
