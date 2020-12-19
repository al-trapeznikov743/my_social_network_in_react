import React from 'react'
import userPhoto from '../../../img/Rick.jpg'
import styles from './UserList.module.sass'

const UserList = () => {
    return <div className={styles.list}>
        <div className={`${styles.item} element`}>
            <div className={styles.descr}>
                <img className={styles.photo} src={userPhoto} alt="img"/>
                <div className={styles.data}>
                    <span className={styles.username}>Rick Sanchez</span>
                    <span className={styles.last}>last message</span>
                </div>
            </div>
            <span className={styles.last}>yesterday</span>
        </div>
    </div>
}

export default UserList