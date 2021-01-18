import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import styles from './LoginForm.module.sass'
import * as yup from 'yup'


const LoginForm = (props) => {

    const [errorMessage, setErrorMessage] = useState(null)

    const validationSchema = yup.object().shape({
        email: yup.string().required('Required field'),
        password: yup.string().required('Required field')
    })

    const onSubmit = async (formData, {setSubmitting, resetForm}) => {
        const {email, password, rememberMe} = formData
        const errorMessage = await props.login(email, password, rememberMe)
        if (errorMessage) {
            setErrorMessage(errorMessage)
            resetForm()
        }
        setSubmitting(false)
        resetForm()
    }
    return <div className={`${styles.form_wrapper} element`}>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                isSubmitting,
                isValid,
                touched,
                errors
            }) => (
                <Form className={styles.form}>
                    <>
                        <Field
                            type='text'
                            name='email'
                            placeholder='Email'
                            className={`${styles.form_item} ${styles.field}`}
                        />
                        {touched.email && errors.email &&
                            <span className={styles.error}>
                                Field is required
                            </span>}
                        <Field
                            type='text'
                            name='password'
                            placeholder='Password'
                            className={`${styles.form_item} ${styles.field}`}
                        />
                        {touched.email && errors.email &&
                            <span className={styles.error}>
                                Field is required
                            </span>}
                        <button
                            type='submit'
                            disabled={isSubmitting || !isValid}
                            className={`${styles.form_item}`}>
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
                        {errorMessage && <span className={styles.error}>{errorMessage}</span>}
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

export default LoginForm