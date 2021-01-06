import React from 'react'
import {Formik, Form, Field, FieldArray} from 'formik'
import {objectStringСleaning} from '../../../utils/objectManipulations'
import styles from './ProfileEditForm.module.sass'



const ProfileEditFormValidate = (value) => {
    const errors = {}
    return errors
}

const ProfileEditForm = (props) => {

    const initialValues = {
        fullName: '',
        lookingForAJobDescription: '',
        aboutMe: '',
        contacts: objectStringСleaning(props.contacts)
    }

    return <>
        <Formik
            initialValues={initialValues}
            validate={ProfileEditFormValidate}
            onSubmit={props.onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div className={`${styles.wrapper}`}>
                        <div className={styles.basic}>
                            <span className={styles.info_wrapper_value}>Basic information</span>
                        </div>

                        <div className={styles.info_wrapper}>

                            <div className={styles.info_wrapper_item}>
                                <span className={styles.info_wrapper_value}>Full name:</span>
                                <Field
                                    type='text'
                                    name='fullName'
                                    placeholder={props.fullName}
                                    className={styles.field}
                                />
                            </div>
                            <div className={styles.info_wrapper_item}>
                                <span className={styles.info_wrapper_value}>Looking job:</span>
                                <Field
                                    type='checkbox'
                                    name='lookingForAJob'
                                />
                            </div>
                            <div className={styles.info_wrapper_item}>
                                <span className={styles.info_wrapper_value}>My skills:</span>
                                <Field
                                    type='text'
                                    name='lookingForAJobDescription'
                                    placeholder={props.lookingForAJobDescription}
                                    className={styles.field}
                                />
                            </div>
                            <div className={styles.info_wrapper_item}>
                                <span className={styles.info_wrapper_value}>About me:</span>
                                <Field
                                    component='textarea'
                                    name='aboutMe'
                                    placeholder={props.aboutMe}
                                    className={styles.field}
                                />
                            </div>
                        </div>

                        <span className={styles.contacts}>Contacts</span>
                        <div className={styles.contacts_list}>
                            <FieldArray
                                name='contacts'
                                render={() => {
                                    let i = 0
                                    return Object.keys(props.contacts).map(key => {
                                        return <Contact key={i++} id={i} title={key} value={props.contacts[key]}/>
                                    })
                                }}
                            />

                        </div>
                        <button type='submit' disabled={isSubmitting} className={styles.button}>
                            Edit
                        </button>
                        <button onClick={props.toggleEditMode}>Cancel</button>
                    </div>
                </Form>
            )}
        </Formik>
    </>
}


const Contact = (props) => {
    return <div className={styles.contacts_item_wrapper}>
        <span className={`${styles.contacts_item} ${styles.contacts_value}`}>{props.title}</span>
        <Field
            type='text'
            name={`contacts.${props.title}`}
            placeholder={props.value}
            className={styles.field}
        />
    </div>
}

export default ProfileEditForm