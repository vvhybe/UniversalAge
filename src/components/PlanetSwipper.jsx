import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";

import mercury from '../Planets/mercury.mp4';
import venus from '../Planets/venus.mp4';
import earth from '../Planets/earth.mp4';
import mars from '../Planets/mars.mp4';
import jupiter from '../Planets/jupiter.mp4';
import saturn from '../Planets/saturn.mp4';
import neptune from '../Planets/neptune.mp4';
import uranus from '../Planets/uranus.mp4';
import pluto from '../Planets/pluto.mp4';


function PlanetSwipper({setPlanet, planets}) {
  const planetsMap = {
    "mercury": mercury,
    "venus": venus,
    "earth": earth,
    "mars": mars,
    "jupiter": jupiter,
    "saturn": saturn, 
    "neptune": neptune,
    "uranus": uranus,
    "pluto": pluto
  }
  
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={160}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          scale: 0.6,
          depth: 40,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper planetSwipper"

        onSlideChange={(swiper) => { setPlanet(Object.keys(planets)[swiper.realIndex]) }}
        >

      { Object.keys(planets).map(plnt => (
        <SwiperSlide key={planets[plnt].id} virtualIndex={planets[plnt].id} className={"planet " + planets[plnt].name}>
          <video muted={true} autoPlay={true} loop={true} src={planetsMap[plnt]}></video>
        </SwiperSlide>
      )) }
      </Swiper>
    </>
  );
}

export default PlanetSwipper;