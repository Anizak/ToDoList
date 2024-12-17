import React from 'react'
import styles from "./ToDoList.module.css"
import { todos } from '../../../services/todo.service'
import Item from '../item/Item'

const ToDoList = () => {

  return (
    <div className={styles.list}>
        {todos.map((elem) =>{
            return <Item key={elem.id}/>
        })}
    </div>
  )
}

export default ToDoList