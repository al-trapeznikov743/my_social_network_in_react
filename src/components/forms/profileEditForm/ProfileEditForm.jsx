import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import {required} from '../validators'
import styles from './ProfileEditForm.module.sass'


const ProfileEditForm = (props) => {
    let i = 0
    return <form onSubmit={props.handleSubmit}>
        <div className={`${styles.wrapper}`}>

            <div className={styles.basic}>
                <span className={styles.info_wrapper_value}>Basic information</span>
            </div>

            <div className={styles.info_wrapper}>

                <div className={styles.info_wrapper_item}>
                    <span className={styles.info_wrapper_value}>Full name:</span>
                    <Field
                        component='input'
                        name='fullName'
                        placeholder={props.fullName}
                        className={styles.field}
                        validate={[required]}
                    />
                </div>
                <div className={styles.info_wrapper_item}>
                    <span className={styles.info_wrapper_value}>Looking job:</span>
                    <Field
                        component='input'
                        type='checkbox'
                        name='lookingForAJob'
                    />
                </div>
                <div className={styles.info_wrapper_item}>
                    <span className={styles.info_wrapper_value}>My skills:</span>
                    <Field
                        component='input'
                        name='lookingForAJobDescription'
                        placeholder={props.lookingForAJobDescription}
                        className={styles.field}
                        validate={[required]}
                    />
                </div>
                <div className={styles.info_wrapper_item}>
                    <span className={styles.info_wrapper_value}>About me:</span>
                    <Field
                        component='textarea'
                        name='aboutMe'
                        placeholder={props.aboutMe}
                        className={styles.field}
                        validate={[required]}
                    />
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
            <button className={styles.button}>Edit</button>
            <button onClick={props.toggleEditMode}>Cancel</button>
        </div>
    </form>
}

const Contact = (props) => {
    return <div className={styles.contacts_item_wrapper}>
        <span className={`${styles.contacts_item} ${styles.contacts_value}`}>{props.title}</span>
        <Field
            component='input'
            name={`contacts.${props.title}`}
            placeholder={props.title}
            className={styles.field}
        />
    </div>
}


const afterSubmit = (result, dispatch) => {
    dispatch(reset('editProfile'))
}

export default reduxForm({
    form: 'editProfile',
    onSubmitSuccess: afterSubmit
})(ProfileEditForm)