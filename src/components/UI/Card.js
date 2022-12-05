import React from "react";
import styles from './Card.module.css'

const Card = props => {
    return (
        <div className={styles.card}>
            {props.children} 
        </div>
    )
}
// props.children fills in content from the parent component that calls the components (AddUser.js)
export default Card;