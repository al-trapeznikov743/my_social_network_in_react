import React from 'react'
import {connect} from 'react-redux'
import styles from './UserInfo.module.sass'

const UserInfo = (props) => {

    const contacts = props.profile.contacts
    const fullName = props.profile.fullName

    return <div className={`${styles.user_info} element`}>
        <div className={styles.wrapper}>
            <h1 className={styles.full_name}>{fullName}</h1>
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

                {/* Object.keys возвращает массив свойств, далее map возвращает новый массив */}
                {Object.keys(contacts).map(key => {
                    return <Contact title={key} value={contacts[key]}/>
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


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, null)(UserInfo)