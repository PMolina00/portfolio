import React from 'react'
import styles from './about.module.css'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.cardText}>
            <h2>Sobre mí</h2>
            <p>
                𝙷𝚘𝚕𝚊, 𝙼𝚒 𝚗𝚘𝚖𝚋𝚛𝚎 𝚎𝚜 𝙿𝚊𝚋𝚕𝚘, 𝚕𝚞𝚎𝚐𝚘 𝚍𝚎 𝚛𝚎𝚌𝚒𝚋𝚒𝚛𝚖𝚎 𝚍𝚎𝚕 𝚋𝚊𝚌𝚑𝚒𝚕𝚕𝚎𝚛 𝚎𝚗 𝚒𝚗𝚏𝚘𝚛𝚖á𝚝𝚒𝚌𝚊, 𝚖𝚎 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚎 𝚞𝚗 𝚖𝚘𝚗𝚝ó𝚗 𝚙𝚘𝚛 𝚕𝚊 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚌𝚒ó𝚗 𝚙𝚘𝚛 𝚕𝚘 𝚚𝚞𝚎 𝚕𝚘𝚐𝚛𝚎 𝚍𝚊𝚛 𝚌𝚘𝚗 #𝚑𝚎𝚗𝚛𝚢, 𝚚𝚞𝚎 𝚖𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚒ó 𝚙𝚛𝚘𝚏𝚞𝚗𝚍𝚒𝚣𝚊𝚛 𝚖𝚒𝚜 𝚌𝚘𝚗𝚘𝚌𝚒𝚖𝚒𝚎𝚗𝚝𝚘𝚜 𝚢 𝚊𝚍𝚚𝚞𝚒𝚛𝚒𝚛 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚙𝚛𝚘𝚢𝚎𝚌𝚝𝚘𝚜 𝚌𝚘𝚖𝚘 𝙵𝚞𝚕𝚕 𝚂𝚝𝚊𝚌𝚔 𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚊 𝚗𝚒𝚟𝚎𝚕 𝚊𝚌𝚊𝚍é𝚖𝚒𝚌𝚘.
            </p>
            <p>
                𝙲𝚘𝚗 𝚎𝚜𝚝𝚘 𝚌𝚘𝚖𝚘 𝚋𝚊𝚜𝚎 𝚎𝚜𝚙𝚎𝚛𝚘 𝚙𝚘𝚍𝚎𝚛 𝚜𝚎𝚐𝚞𝚒𝚛 𝚘𝚋𝚝𝚎𝚗𝚒𝚎𝚗𝚍𝚘 𝚖𝚊𝚜 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 𝚢 𝚊𝚙𝚛𝚎𝚗𝚍𝚒𝚎𝚗𝚍𝚘 𝚗𝚞𝚎𝚟𝚊𝚜 𝚝𝚎𝚌𝚗𝚘𝚕𝚘𝚐í𝚊𝚜, 𝚎𝚜𝚙𝚎𝚌𝚒𝚊𝚕𝚒𝚣á𝚗𝚍𝚘𝚖𝚎 𝚢 𝚕𝚘𝚐𝚛𝚊𝚗𝚍𝚘 𝚝𝚎𝚗𝚎𝚛 𝚞𝚗 𝚖𝚎𝚓𝚘𝚛 𝚏𝚞𝚝𝚞𝚛𝚘.
            </p>
            <p>
                𝚂𝚒 𝚝𝚎 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚊 𝚖𝚒 𝚙𝚎𝚛𝚏𝚒𝚕 𝚢 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚌𝚘𝚗𝚘𝚌𝚎𝚛 𝚖𝚊𝚜, 𝚙𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚗𝚝𝚊𝚌𝚝𝚊𝚛𝚖𝚎 𝚙𝚘𝚛 𝚖𝚒 𝚖𝚊𝚒𝚕 𝚍𝚎 𝚌𝚘𝚗𝚝𝚊𝚌𝚝𝚘: <Link href='/contact'> 𝚙𝚖𝚘𝚕𝚒𝚗𝚊𝟿𝟾𝟽𝟼@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖 </Link>
            </p>
            <p>
                𝙶𝚛𝚊𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚜𝚞 𝚝𝚒𝚎𝚖𝚙𝚘.
            </p>
        </div>
        <div className={styles.cardText}>
            <h2>Educación</h2>
            <h4>
                <b>Henry:</b> Más de 700 horas de aprendizaje intensivo.
            </h4>
            <p>
                Las tecnologías aprendidas incluyen:
            </p>
            <ul>
                <li>Fundamentos HTML/CSS/GIT/Javascript</li>
                <li>Javascript Avanzado</li>
                <li>Estructura de Datos</li>
                <li>Algoritmos</li>
                <li>DOM/CSS Avanzado</li>
                <li>ES6</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Metodología ágil SCRUM</li>
            </ul>
        </div>
    </div>
  )
}

export default About
