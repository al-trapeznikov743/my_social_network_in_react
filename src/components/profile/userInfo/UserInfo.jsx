import React from 'react'
import styles from './UserInfo.module.sass'

const UserInfo = (props) => {

    let i = 0

    return <div className={`${styles.user_info} element`}>
        <div className={styles.wrapper}>
            {/*props.fullname*/}
            <h1 className={styles.full_name}>{props.fullName}</h1>
            {/*props.status*/}
            <span className={styles.status}>{props.status || 'set a status message'}</span>
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

                {/*props.contacts*/}
                {/* Object.keys возвращает массив свойств, далее map возвращает новый массив */}
                {Object.keys(props.contacts).map(key => {
                    return <Contact key={i++} title={key} value={props.contacts[key]}/>
                })}

            </div>
            <button>Edit</button>
        </div>
    </div>
}


const Contact = (props) => {
    return <div className={styles.contacts_item_wrapper}>
        <span className={`${styles.contacts_item} ${styles.contacts_value}`}>{props.title}</span>
        <span className={styles.contacts_item}>{props.value}</span>
    </div>
}

export default UserInfo