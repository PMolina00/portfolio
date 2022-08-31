import React from 'react'
import styles from './banner.module.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const BannerComponent = () => {
  return (
         <div className={styles.bannerContainer}>
            <div className={styles.socialIcons}>
                <a href='https://github.com/PMolina00'>
                    <AiFillGithub
                        color='#f5f6fa'
                        size={'1.5rem'}
                    />
                    </a>
                <a href='https://www.linkedin.com/in/pablo-molina-00/'>
                    <AiFillLinkedin
                        color='#f5f6fa'
                        size={'1.4rem'}
                    />
                    </a>
                <a href='mailto:pmolina9876@gmail.com'>
                    <SiGmail
                        color='#f5f6fa'
                        size={'1.3rem'}/>
                </a>
            </div>
            <div className={styles.textBanner}>
                <h2>Hi, my name is Pablo</h2>
                <p>I&apos;m Full Stack Developer in Javascript and Typescript with React / Next / React Native and Node / Express.</p>
                <p>i&apos;m specialized in Backend with Node / Express and Typescript, and i know a little about clean architecture / hexagonal architecture.</p>
                <p>But I also like the Frontend with React and Next.</p>
            </div>
            <p className={styles.bannerScroll}>scroll down ➞</p>
        </div>
  )
}

export default BannerComponent
