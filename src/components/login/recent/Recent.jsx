import React from 'react'
import styles from './Recent.module.sass'
import userPhoto from '../../../img/Rick.jpg'

const Recent = () => {
    return <div className={styles.recent}>
        <div className={`${styles.list} element`}>
            <div className={`${styles.item} element`}>
                <img className={styles.photo} src={userPhoto} alt="img"/>
                <span className={styles.username}>Rick Sanchez</span>
            </div>
            <div className={`${styles.item} element`}>
                <img className={styles.photo} src={userPhoto} alt="img"/>
                <span className={styles.username}>Serhio Sanchez</span>
            </div>
            <div className={`${styles.item} element`}>
                Add user
            </div>
        </div>
    </div>
}

export default Recent