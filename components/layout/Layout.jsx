import Head from 'next/head'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Portfolio next.js</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainContainer}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
