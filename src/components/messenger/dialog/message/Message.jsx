import React from 'react'
import userPhoto from '../../../../img/Rick.jpg'
import styles from './Message.module.sass'

const Message = (props) => {
    return <div className={ `${styles.message} ${props.reverse && styles.reverse}`}>
        <img className={styles.photo} src={userPhoto} alt="img"/>
        <div className={styles.wrapper}>
            <span className='element'>message Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas obcaecati similique ipsum dignissimos molestiae numquam suscipit nesciunt est! Molestiae, sed nam facilis explicabo aut reprehenderit ex rerum!</span>
            <span className={styles.date}>date 21 aug at 2:00 am</span>
        </div>
    </div>
}

export default Message