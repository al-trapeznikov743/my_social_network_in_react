import React from 'react'
import styles from './Messenger.module.sass'
import Dialog from './dialog/Dialog'
import UserList from './userLIst/UserList'

const Messenger = () => {
    return <div className={styles.messenger}>
        <UserList />
        <Dialog />
    </div>
}

export default Messenger