/* eslint-disable react/prop-types */
import './App.css'
// import { useState } from "react"

export default function CommInputBox({ curr, handleClick, textValue,handleChange, comm_function }) {

    

  return (
    <div className="comment__input__container">
        <img src={curr.image.webp} alt={curr.username} className="comm__box__img"/>
            <textarea value={textValue} onChange={handleChange} className="comm__box__textarea" name="comment__box" id="com_box" cols="45" rows="5" placeholder='Add a comment...'></textarea>
            <button className="comm__box__button" onClick={handleClick}>{comm_function}</button>
    </div>
  )
}
