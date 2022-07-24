import React from "react"
import style from "./bcg.module.scss"
import yellowGlossy from "../images/SuperToroid-Yellow-Glossy.png"
const Background = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bcg}>
        <div className={style.sphereBig}></div>
        <div className={style.sphereSmall}>
          <img className={style.glossy} src={yellowGlossy} alt='' />
          <div className={style.sphere}></div>
        </div>
      </div>
    </div>
  )
}

export default Background
