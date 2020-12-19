import React from 'react'
import styles from './UserInfo.module.sass'

const UserInfo = () => {

    return <div className={`${styles.user_info} element`}>
        <div className={styles.wrapper}>
            <h1 className={styles.full_name}>Rick Sanchez</h1>
            <span className={styles.status}>set a status message</span>
            <div className={styles.location}>
                <div className={styles.location_item}>
                    <span className={styles.location_value}>Country:</span>
                    <span className={styles.contacts_item}>United States</span>
                </div>
                <div className={styles.location_item}>
                    <span className={styles.location_value}>Current city:</span>
                    <span className={styles.contacts_item}>Los Angeles</span>
                </div>
            </div>
            <span className={styles.contacts}>Contacts</span>
            <div className={styles.contacts_list}>
                <div className={styles.contacts_item_wrapper}>
                    <span className={`${styles.contacts_item} ${styles.contacts_value}`}>github:</span>
                    <span className={styles.contacts_item}>https://github.com</span>
                </div>
                <div className={styles.contacts_item_wrapper}>
                    <span className={`${styles.contacts_item} ${styles.contacts_value}`}>facebook:</span>
                    <span className={styles.contacts_item}>https://facebook.com</span>
                </div>
            </div>
            <button>Edit</button>
        </div>
    </div>
}

export default UserInfo