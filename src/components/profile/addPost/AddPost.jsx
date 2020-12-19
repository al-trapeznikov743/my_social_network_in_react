import React from 'react'
import styles from './AddPost.module.sass'

const AddPost = () => {
    return <div className={`${styles.add_post} element`}>
        <div className={styles.field_wrapper}>
            <div className={styles.new}>
                <div className='link_icon'>
                    <i className='fas fa-feather'></i>
                </div>
                <input className={styles.field} placeholder="What's new?" type="text"/>
            </div>
            <div className='link_icon'>
                <i className={`fas fa-smile ${styles.icon} interaction`}></i>
            </div>
        </div>
        <div className={styles.interaction}>
            <div className={styles.icons}>
                <div className='link_icon'>
                    <i className={`fas fa-camera-retro ${styles.icon} interaction`}></i>
                </div>
                <div className='link_icon'>
                    <i className={`fas fa-music ${styles.icon} interaction`}></i>
                </div>
                <div className='link_icon'>
                    <i className={`fas fa-video ${styles.icon} interaction`}></i>
                </div>
            </div>
            <button>Send</button>
        </div>
    </div>
}

export default AddPost