import React from 'react'
import styles from './SendMessage.module.sass'

const SendMessage = () => {
    return <div className={styles.new_message}>
        <div className={styles.wrapper}>
            <div className='link_icon'>
                <i className='fas fa-feather'></i>
            </div>
            <input className={styles.field} placeholder='Write a message...' type="text"/>
        </div>
        <div className={styles.wrapper}>
            <div className={`link_icon ${styles.icon}`}>
                <i className='fas fa-smile interaction'></i>
            </div>
            <div className={`link_icon ${styles.icon}`}>
                <i className='fas fa-camera-retro interaction'></i>
            </div>
            <div className={`link_icon ${styles.icon}`}>
                <i className='fas fa-music interaction'></i>
            </div>
            <div className={`link_icon ${styles.icon}`}>
                <i className='fas fa-video interaction'></i>
            </div>
        </div>
    </div>
}

export default SendMessage