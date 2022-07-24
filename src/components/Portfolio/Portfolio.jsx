import React from "react"
import style from "./portfolio.module.scss"
import s from "./workcard.module.scss"
import github from "../../icons/github.svg"
import avito from "../../images/avito.png"
import webdesign from "../../images/webdesign.png"
import portfolio from "../../images/portfolio.png"
const Portfolio = () => {
  const WorkCard = (props) => {
    return (
      <div className={s.wrapper}>
        <h3 className={s.title}>{props.title}</h3>
        <img src={props.img} alt='' className={s.image} />
        <div className={s.description}>
          <p className={s.descript}>
            <span>Project Description : </span>
            {props.description}
          </p>
          <p className={s.problemsAndSolves}>
            <span> Problems and Solves : </span>
            {props.problemsAndSolves}{" "}
          </p>
          <span className={s.stack}>
            <span>Stack:</span>
            {props.stack}
          </span>
          <a
            className={s.github}
            href={props.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className={s.githubText}>Github Repository</span>
          </a>
        </div>
      </div>
    )
  }
  const workData = [
    {
      title: "Avito analog for Argentina",
      img: avito,
      description:
        "This is my graduation project, made in a team with a backend developer, an iOS developer and a web designer",
      stack: " ReactJs, Mobx, React Props, React Router Dom, SCSS, CSS Modules",
      problemsAndSolves: " Some problems and my solves of this problems",
      github: "https://github.com/maltcevrg",
    },
    {
      title: "Web-designer blog",
      img: webdesign,
      description:
        "A simple website made by yourself as part of the ReactJs study. Made according to a mockup that was found on the Internet",
      stack: " ReactJs, React Props, React Router Dom, SCSS, CSS Modules",
      problemsAndSolves: " Some problems and my solves of this problems",
      github: "https://github.com/maltcevrg/pet-project",
    },
    {
      title: "Portfolio web-site",
      img: portfolio,
      description: " My portfolio web-site, here you are right now",
      stack: " ReactJs, React Props, React Router Dom, SCSS, CSS Modules",
      problemsAndSolves: " Some problems and my solves of this problems",
      github: "https://github.com/maltcevrg",
    },
  ]
  let workArray = workData.map((el) => (
    <WorkCard
      title={el.title}
      img={el.img}
      description={el.description}
      stack={el.stack}
      problemsAndSolves={el.problemsAndSolves}
      github={el.github}
    />
  ))

  return <div className={style.wrapper}>{workArray}</div>
}

export default Portfolio
