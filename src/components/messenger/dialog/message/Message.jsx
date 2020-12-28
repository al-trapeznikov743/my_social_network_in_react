import React from 'react'
import userPhoto from '../../../../img/userPhoto/RickSmall.jpg'
import styles from './Message.module.sass'

const Message = (props) => {
    return <div className={ `${styles.message} ${props.reverse && styles.reverse}`}>
        <img className={styles.photo} src={userPhoto} alt="img"/>
        <div className={styles.wrapper}>
            <span className='element'>{props.message || 'Nu i huly epta'}</span>
            <span className={styles.date}>date 21 aug at 2:00 am</span>
        </div>
    </div>
}

export default Message