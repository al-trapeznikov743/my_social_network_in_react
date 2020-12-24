import React, {useState} from 'react'
import ProfileStatus from './profileStatus/ProfileStatus'
import ProfileEditForm from './../../forms/ProfileEditForm'
import styles from './ProfileData.module.sass'

const ProfileData = (props) => {

    const [editMode, setEditMode] = useState(false)

    //const editMode = true
    const toggleEditMode = (e) => {
        if(editMode) {
            e.preventDefault()
            setEditMode(false)
            return undefined
        }
        setEditMode(true)
    }
    const onSubmit = async (formData) => {
        await props.updateProfile(formData)
        setEditMode(false)
    }

    return <div className={`${styles.user_info} element`}>
        {editMode
            ? <ProfileEditForm
                fullName={props.fullName}
                lookingForAJob={props.lookingForAJob}
                lookingForAJobDescription={props.lookingForAJobDescription}
                aboutMe={props.aboutMe}
                contacts={props.contacts}
                onSubmit={onSubmit}
            />
            : <ProfileDataContainer
                fullName={props.fullName}
                status={props.status}
                lookingForAJob={props.lookingForAJob}
                lookingForAJobDescription={props.lookingForAJobDescription}
                aboutMe={props.aboutMe}
                contacts={props.contacts}
                toggleEditMode={toggleEditMode}
                isOwner={props.isOwner}
            />}
    </div>
}


const ProfileDataContainer = (props) => {
    let i = 0
    return <div className={styles.wrapper}>
        {/*props.fullname*/}
        <h1 className={styles.full_name}>{props.fullName}</h1>
        {/*props.status*/}
        <ProfileStatus
            status={props.status}
            styles={styles}
            updateStatus={props.updateStatus}
        />
        <div className={styles.info_wrapper}>
            <div className={styles.info_wrapper_item}>
                <span className={styles.info_wrapper_value}>Country:</span>
                <span className={styles.contacts_item}>United States</span>
            </div>
            <div className={styles.info_wrapper_item}>
                <span className={styles.info_wrapper_value}>Current city:</span>
                <span className={styles.contacts_item}>Los Angeles</span>
            </div>
            <div className={styles.info_wrapper_item}>
                <span className={styles.info_wrapper_value}>Looking job:</span>
                <span className={styles.contacts_item}>{props.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div className={styles.info_wrapper_item}>
                <span className={styles.info_wrapper_value}>My skills:</span>
                <span className={styles.contacts_item}>{props.lookingForAJobDescription}</span>
            </div>
            <div className={styles.info_wrapper_item}>
                <span className={styles.info_wrapper_value}>About me:</span>
                <span className={`${styles.contacts_item} ${styles.about_me}`}>{props.aboutMe}</span>
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
        {props.isOwner
            && <div className={styles.editActivate_wrapper}>
                <span className={styles.editActivate} onClick={props.toggleEditMode}>Edit profile</span>
            </div>}
    </div>
}


const Contact = (props) => {
    return <div className={styles.contacts_item_wrapper}>
        <span className={`${styles.contacts_item} ${styles.contacts_value}`}>{props.title}</span>
        <span className={styles.contacts_item}>{props.value}</span>
    </div>
}

export default ProfileData