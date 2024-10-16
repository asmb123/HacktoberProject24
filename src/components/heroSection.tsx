import "./HeroSection.css";
import Button from "@mui/material/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          recusandae, necessitatibus adipisci vitae quam placeat. Ducimus
          dolorum mollitia rerum voluptas iusto itaque similique, nam
          consequuntur dolorem incidunt atque cumque ab?
        </div>
        <div className="buttons">
          <Button variant="contained" size="medium" className="hero-btn">
            Start
          </Button>{" "}
          &nbsp;&nbsp;
          <Button variant="contained" size="medium" className="hero-btn">
            Support
          </Button>
        </div>
      </div>

      <div className="hero-image">
        <Image
          src="/images/heroImg.jpg"
          alt="Hero Section"
          layout="fill"
          objectFit="cover"
          className="hero-img"
          priority={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
