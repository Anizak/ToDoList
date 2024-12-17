import React from "react";
import styles from "./Item.module.css";
import Button from "../../button/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Item = () => {
  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <input type="text" />
      <div className={styles.button}><Button>
        <CiEdit />
      </Button></div>
      <div className={styles.button}><Button>
        <MdDeleteOutline />
      </Button></div>
    </div>
  );
};

export default Item;
