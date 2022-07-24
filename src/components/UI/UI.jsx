import { React, useState } from "react"
import style from "./ui.module.scss"
import Background from "../../generic/background"
import whitesphere from "../../images/Sphere-White-Matte.png"
import pill from "../../images/Pill-Blue-Glossy.png"
import purpletop from "../../images/SuperToroid-Purple-Glossy.png"
import Introduction from "../Content/Introduction"
import Portfolio from "../Portfolio/Portfolio"
import "./activelink.scss"

import { Routes, Route, NavLink } from "react-router-dom"
const setActive = ({ isActive }) => (isActive ? "activelink" : "link")
const UI = (props) => {
  return (
    <div className={style.container}>
      <div className={style.pill}>
        <img src={pill} alt='' />
      </div>
      <div className={style.bcg}>
        <Background />
      </div>
      <div className={style.contentWrapper}>
        <div className={style.sphere}>
          <img src={whitesphere} alt='' />
        </div>
        <div className={style.navSlider}>
          <ul className={style.navElements}>
            <li className={style.liElement}>
              <NavLink to='/' className={setActive}>
                Introduction
              </NavLink>
            </li>
            <li className={style.liElement}>
              <NavLink to='/portfolio' className={setActive}>
                Portfolio
              </NavLink>
            </li>
          </ul>
          <div className={style.content}>
            <Routes>
              <Route path='/' element={<Introduction />} />
              <Route path='/portfolio' workData={props.workData}  element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className={style.purpletop}>
        <img src={purpletop} alt='' />
      </div>
    </div>
  )
}

export default UI
