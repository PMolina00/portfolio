import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>All rights reserverd</p>
      <p className={styles.icons}>
        <AiFillInstagram />
      </p>
    </div>
  )
}

export default Footer
