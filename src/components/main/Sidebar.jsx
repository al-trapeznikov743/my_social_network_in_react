import React from 'react'
import styles from '../../styles/Sidebar.module.sass'

const Sidebar = () => {
    return <div className={styles.sidebar}>
        <nav className={styles.ul}>
            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-home'></i>
                </div>
                <span>Home</span>
            </div>

            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-users'></i>
                </div>
                <span>People</span>
            </div>

            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-envelope'></i>
                </div>
                <span>Messenger</span>
            </div>

            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-newspaper'></i>
                </div>
                <span>News</span>
            </div>

            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-compact-disc'></i>
                </div>
                <span>Music</span>
            </div>

            <div className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-cog'></i>
                </div>
                <span>Settings</span>
            </div>
        </nav>
    </div>
}

export default Sidebar