import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dynamic Todo List",
    github: "#",
    demo: "https://rugged-mammoth-cave-86633.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Calendar App",
    github: "https://github.com/AdullahRazi/calendar",
    demo: "https://adullahrazi.github.io/calendar/"
  },
  {
    id: 3,
    image: IMG3,
    title: "tindog",
    github: "https://github.com/AdullahRazi/tindog",
    demo: "https://adullahrazi.github.io/tindog/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Tic-Tac-Toe",
    github: "https://github.com/AdullahRazi/Tic-Tac-Toe",
    demo: "https://adullahrazi.github.io/Tic-Tac-Toe/"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Showcasing my skills</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">

        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio