import React from 'react'
import style from "./Button.module.css"
const Button = ({children}) => {

    const add = () =>{
        
    }
  return (
    <button onClick={add} className={style.btn}>{children}</button>
  )
}

export default Button