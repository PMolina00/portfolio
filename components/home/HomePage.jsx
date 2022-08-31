import React from 'react'
import { useRouter } from 'next/router'

import styles from './homePage.module.css'
import BannerComponent from './homeComponents/banner/BannerComponent'
import SkillsComponent from './homeComponents/skils/SkillsComponent'
import ProyectComponent from './homeComponents/proyects/ProyectComponent'

const HomePage = () => {
  const router = useRouter()
  const handleClickReadMore = () => {
    router.push('/about')
  }
  return (
    <div className={styles.container}>
        <BannerComponent />

        <SkillsComponent />

        <button className={styles.readMore} onClick={handleClickReadMore}>
            Read More
        </button>

        <ProyectComponent />
    </div>
  )
}

export default HomePage
