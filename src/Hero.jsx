import React from "react";
import imageHero from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            I love working with CMS........ <br /> So I decided to do this small
            piece with CMS <br /> My love for CMS begun when I worked with DATO
            CMS and it was beautiful{" "}
          </p>
        </div>
        <div className='img-container'>
          <img src={imageHero} alt='woman and browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
