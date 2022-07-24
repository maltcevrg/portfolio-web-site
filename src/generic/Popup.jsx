import React from "react"
import "./popup.scss"

const Popup = ({ show, setShow, children }) => {
  return (
    <div
      className={show ? "popup active" : "popup"}
      onClick={() => setShow(false)}
    >
      <div
        className={show ? "popupContent active" : "popupContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='description'>{children}</div>
      </div>
    </div>
  )
}

export default Popup
