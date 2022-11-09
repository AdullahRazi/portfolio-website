import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { TbRoad } from "react-icons/tb"
import { FaAward } from "react-icons/fa"
import { BsCodeSlash } from "react-icons/bs"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <TbRoad className='about__icon' />
              <h5> Stream</h5>
              <small>B.Tech - Computer Science | 9.39 CGPA</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small>Campus Ambassador | Bajaj Finserv Health</small>
            </article>
            <article className='about__card'>
              <BsCodeSlash className='about__icon'/>
              <h5> Coding </h5>
              <small> Solved 400+ problems</small>
            </article>
          </div>
          <p>

          An individual who's willing to learn and deeply understand different kinds of technology in the software domain and
to apply the same in the real world in order to bring a change for the better.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About