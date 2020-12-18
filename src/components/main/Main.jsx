import React from 'react'
import Profile from '../profile/Profile'
import Sidebar from './Sidebar'
import styles from '../../styles/Main.module.sass'

const Main = () => {
    return <div className={styles.main}>
        <Sidebar />
        <Profile />
    </div>
}

export default Main