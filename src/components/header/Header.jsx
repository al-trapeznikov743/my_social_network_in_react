import React from 'react'
import nasaLogo from '../../icons/NASA_logo.svg'
import searchIcon from '../../icons/search.svg'
import headerPhoto from '../../img/Rick.jpg'
import styles from '../../styles/Header.module.sass'

const Header = () => {
    return  <div className={styles.header}>
                <img src={nasaLogo} alt="logo" className={styles.logo}/>
                <div className={styles.tools}>
                    <img src={searchIcon} alt="img" className={styles.search_img}/>
                    <input placeholder='Search' type='text' className={styles.top_search}/>
                    <div className={styles.welcome}>
                        <span>Hey, John!</span>
                        <img src={headerPhoto} alt="img" className={styles.pr_photo}/>
                    </div>
                </div>
    </div>
}

export default Header