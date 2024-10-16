import React from "react";
import imageHero from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            vitae fugit modi, quasi animi molestias adipisci exercitationem
            dignissimos, qui voluptatem ex! Dolorum, reprehenderit sunt. A,
            temporibus!
          </p>
        </div>
        <div className='img-container'>
          <img src={imageHero} alt='woman and browser' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
