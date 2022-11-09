import React, { useRef, useState } from 'react'
import "./testimonials.css"
import CERT1 from "../../assets/avatar1.jpg"
import CERT2 from "../../assets/avatar2.jpg"
import CERT3 from "../../assets/avatar3.jpg"
import CERT4 from "../../assets/avatar4.jpg"
import CERT5 from "../../assets/avatar5.jpeg"
import CERT6 from "../../assets/avatar6.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const data = [
  {
    id: 1,
    image: CERT1,
    name: "1st position in Tech-A-Thon",
    desc: "iNeuron 2022",
    link: "https://drive.google.com/file/d/1DDtn5N359OWoknHRujJD9Ks5vQNsVXHx/view"
  },
  {
    id: 2,
    image: CERT2,
    name: "Innovate India Coding Championship",
    desc: "AICTE 2022",
    link: "https://drive.google.com/file/d/1jBBxCz2g9qqN0bM3uMn79457rh9p4FWa/view"
  },
  {
    id: 3,
    image: CERT3,
    name: "Introduction to Artificial Intelligence",
    desc: "NPTEL | IIT Madras 2022",
    link: "https://drive.google.com/file/d/1jBqNY5YhITtd0nOyZK3h1WHhDOl6m40B/view"
  },
  {
    id: 4,
    image: CERT4,
    name: "Data Structures and Algorithms, Level-up for Coding Interviews",
    desc: "Coding Minutes 2022",
    link: "https://drive.google.com/file/d/1Qasgy1oT9C9WbomVKN1y-xTeYH_oGBP5/view?usp=sharing"
  },
  {
    id: 5,
    image: CERT5,
    name: "Community Development Internship",
    desc: "Saubhagya Foundation 2022",
    link: "https://drive.google.com/file/d/1-ypLvkJQ0dGfe7_vgGuQQL6pC_d6AIt1/view?usp=sharing"
  },
  {
    id: 6,
    image: CERT6,
    name: "Neo Codeathon",
    desc: "iamneo 2022",
    link: "https://drive.google.com/file/d/1BJR_Ew4VUaVRW23Ef2vB6N0BgT1rh2qo/view?usp=sharing"
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Passion to learn</h5>
      <h2>Certifications and Achievements</h2>
      <Swiper effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper container certifications__container">

        {data.map(({ id, image, name, desc, link }) => {
          return (
            <SwiperSlide className="certification" key={id}>
              <div className="certification__image">
                <img src={image} alt="Certification One" />
              </div>
              <h5 className='certification__name'>{name}</h5>
              <small className="certification__desc">{desc}</small><br />
              <a href={link} target="_blank" className="certificate__link">View Certificate</a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials