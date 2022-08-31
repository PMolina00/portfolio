import React from 'react'
import styles from './cardProyect.module.css'

const CardProyects = ({ type, titleCard, descriptionCard, refLink }) => {
  return (
    <div
        className={styles.cardContainer}
        id={
            type === 'frontend'
              ? styles.frontend
              : styles.backend
        }
    >
        <h2 className={styles.titleCard}>{titleCard}</h2>
        <p className={styles.descriptionCard}>{descriptionCard}</p>
        <div className={styles.buttonContainer}>
            <a href={refLink.deployed} id={refLink.deployed ?? styles.disable}>Deployed</a>
            <a href={refLink.repository} id={refLink.repository ?? styles.disable}>Repository</a>
        </div>
    </div>
  )
}

export default CardProyects
