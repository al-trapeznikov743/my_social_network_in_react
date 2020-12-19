import React from 'react'
import styles from './PeopleList.module.sass'
import peoplePhoto from '../../../img/Rick.jpg'

const PeopleList = () => {
    return <div className={styles.list}>
        <div className={`${styles.item} element`}>
            <div className={styles.descr}>
                <img className={styles.photo} src={peoplePhoto} alt="img"/>
                <div className={styles.wrapper}>
                    <span className={styles.username}>Rick Sanchez</span>
                    <span className={styles.status}>Status</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button>Follow/Unfollow</button>
                <button>Message</button>
            </div>
        </div>
    </div>
}

export default PeopleList