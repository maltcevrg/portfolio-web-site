import React, { useState } from "react"
import style from "./Introduction.module.scss"
import ava from "../../images/Saly-13.png"
import telegram from "../../icons/telegram.svg"
import vk from "../../icons/vk.svg"
import github from "../../icons/github.svg"
const Introduction = () => {
  const [show, setShow] = useState(false)
  return (
    <div className={style.content}>
      <div className={style.titleContent}>
        <p className={style.title}>
          Hey, my name is <br />
          <span className={style.name}> Roman Maltcev</span>
          <br />
          I'm Frontend Developer
        </p>
        <p className={style.descript}>
          I received a Secondary Professional education in sepiality as a
          Programmer Technician at the Higher College of Computer Science at
          NSU. While I was in college, I independently studied the basics of
          frontend development, which I put into practice when I was doing my
          thesis, which helped me grow as a specialist.
        </p>
        <div className={style.skills}>
          <span className={style.mySkils}>My Skills</span>
          <div className={style.skillElemets}>
            <span
              className={style.skillReact}
            >
              #ReactJs
            </span>
            <span
              className={style.skillMobX}
            >
              #mobx
            </span>
            <span
              className={style.skillJs}
            >
              #JavaScript
            </span>
            <span
              className={style.skillHTML}
            >
              #HTML
            </span>
            <span
              className={style.skillSCSS}
            >
              #SCSS
            </span>
          </div>
        </div>
        <div className={style.socials}>
          <h3 className={style.socialsTitle}>my socials</h3>
          <div className={style.socialsWrapper}>
            {" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://t.me/rgm88'
              className={style.tg}
            >
              <img src={telegram} alt='' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/roman-maltcev-42a549230/'
              className={style.linkedin}
            >
              <img
                className={style.linked}
                src='https://www.svgrepo.com/show/347103/linkedin.svg'
                alt=''
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href=' https://vk.com/rgmaltcev'
              className={style.vk}
            >
              <img src={vk} alt='' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/maltcevrg'
              className={style.github}
            >
              <img src={github} alt='' />
            </a>
          </div>
        </div>
      </div>
      <img src={ava} alt='' className={style.ava} />
    </div>
  )
}

export default Introduction
