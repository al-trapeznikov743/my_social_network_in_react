import React from 'react'
import {Formik, Form, Field} from 'formik'
import styles from './LoginForm.module.sass'



const LoginFormValidate = (value) => {
    const errors = {}
    return errors
}

const LoginForm = (props) => {
    const onSubmit = (formData, {setSubmitting}) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
        setSubmitting(false)
    }
    return <div className={`${styles.form_wrapper} element`}>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validate={LoginFormValidate}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form className={styles.form}>
                    <>
                        <Field
                            type='text'
                            name='email'
                            placeholder='Email'
                            className={`${styles.form_item} ${styles.field}`}
                        />
                        <Field
                            type='text'
                            name='password'
                            placeholder='Password'
                            className={`${styles.form_item} ${styles.field}`}
                        />
                        <button type='submit' disabled={isSubmitting} className={`${styles.form_item}`}>
                            Log in
                        </button>
                        <div className={styles.config}>
                            <div className={styles.remember}>
                                <span className={styles.remember_descr}>Remember me</span>
                                <Field
                                    type='checkbox'
                                    name='rememberMe'
                                />
                            </div>
                            <span className={styles.forgot}>Forgot your password?</span>
                        </div>
                    </>
                    <div className={styles.create_ac}>
                        <span className={styles.create}>Create new account</span>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

export default LoginForm