import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Sidebar.module.sass'

const Sidebar = () => {
    return <div className={styles.sidebar}>
        <nav className={styles.ul}>
            <NavLink to='/profile' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-home'></i>
                </div>
                <span>Home</span>
            </NavLink>

            <NavLink to='/people' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-users'></i>
                </div>
                <span>People</span>
            </NavLink>

            <NavLink to='/messenger' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-envelope'></i>
                </div>
                <span>Messenger</span>
            </NavLink>

            <NavLink to='#' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-newspaper'></i>
                </div>
                <span>News</span>
            </NavLink>

            <NavLink to='#' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-compact-disc'></i>
                </div>
                <span>Music</span>
            </NavLink>

            <NavLink to='#' className={styles.link}>
                <div className='link_icon'>
                    <i className='fas fa-cog'></i>
                </div>
                <span>Settings</span>
            </NavLink>
        </nav>
    </div>
}

export default Sidebar