import React from 'react'
import style from "./ToDo.module.css"
import InputField from './inputField/InputField'

const ToDo = () => {
  return (
    <div className={style.mainField}>
        <h1 className={style.text}>To Do List</h1>
        <InputField/>
    </div>
  )
}

export default ToDo