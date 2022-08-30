import React from 'react'
import { useRouter } from 'next/router'

import styles from './homePage.module.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const HomePage = () => {
  const router = useRouter()
  const handleClickReadMore = () => {
    router.push('/about')
  }
  return (
    <div className={styles.container}>
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
        <div className={styles.skilsContainer}>
            <div className={styles.frontendContainer}>
                <h2>Frontend Skils</h2>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Next </li>
                    <li>React Native ( Deployment in android and ios) </li>
                    <li>HTML </li>
                    <li>CSS </li>
                    <li>Typescript ( Class Components / Functions Components ) </li>
                    <li>Styles Components </li>
                    <li>Bootstrap </li>
                    <li>Material UI </li>
                </ul>
            </div>
            <div className={styles.backendContainer}>
                <h2>Backend Skils</h2>
                <ul>
                    <li>Node </li>
                    <li>Express</li>
                    <li>Third-party API integrations</li>
                    <li>Microservices</li>
                    <li>Docker</li>
                    <li>Auth0</li>
                    <li>MongoDB (Mongoose)</li>
                    <li>PostgreSQL (Sequelize)</li>
                    <li>MySQL (SQL / Sequelize)</li>
                    <li>Typescript ( Class, Clean / hexagonal architecture )</li>
                    <li>HTTP ( Protocols Response Code and Errors )</li>
                    <li>Async Protocols</li>
                </ul>
            </div>
        </div>
        <button className={styles.readMore} onClick={handleClickReadMore}>
            Read More
        </button>
    </div>
  )
}

export default HomePage
