import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
        <div className={styles.container}>
            <p className={styles.logo}>
                <Link href='/'>
                    PMolina
                </Link>
            </p>
            <div className={styles.navContainer}>
                <ul className={styles.navUl}>
                    <li className={styles.navLi}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navLi}>
                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                    <li className={styles.navLi}>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar
