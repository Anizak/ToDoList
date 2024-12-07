import React from 'react'
import style from "./InputField.module.css"
import Button from '../button/Button'

const InputField = () => {
  return (
    <div className={style.inputField}>
        <input className={style.input} type='text' />
        <div className={style.btn}><Button>Add</Button></div>
    </div>
  )
}

export default InputField