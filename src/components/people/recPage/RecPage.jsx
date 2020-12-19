import React from 'react'
import styles from './RecPage.module.sass'
import userPhoto from '../../../img/Rick.jpg'

const RecPage = () => {
    return <div className={styles.rec_wrapper}>
        <div className={`${styles.recommended} element`}>
            <span className={styles.descr}>people you may know</span>
            <div className={styles.items}>
                <div className={styles.item}>
                    <img className={styles.photo} src={userPhoto} alt="img"/>
                    <div className={styles.item_data}>
                        <span className={styles.username}>Rick Sanchez</span>
                        <span className={styles.status}>Status</span>
                    </div>
                    <div className={`link_icon ${styles.icon}`}>
                        <i className='fas fa-address-card interaction'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RecPage