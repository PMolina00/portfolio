import React from 'react'
import styles from './skills.module.css'

const SkillsComponent = () => {
  return (
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
  )
}

export default SkillsComponent
