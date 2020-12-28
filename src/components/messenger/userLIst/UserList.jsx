import React from 'react'
import userPhoto from '../../../img/userPhoto/RickSmall.jpg'
import styles from './UserList.module.sass'

const UserList = (props) => {
    return <div className={styles.list}>
        {props.users.map(user => {
            return <User key={user.id} name={user.name}/>
        })}
    </div>
}

const User = (props) => {
    return <div className={`${styles.item} element`}>
        <div className={styles.descr}>
            <img className={styles.photo} src={userPhoto} alt="img"/>
            <div className={styles.data}>
                <span className={styles.username}>{props.name}</span>
                <span className={styles.last}>last message</span>
            </div>
        </div>
        <span className={styles.last}>yesterday</span>
    </div>
}

export default UserList