import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import {required} from '../validators'
import styles from './LoginForm.module.sass'

const LoginForm = (props) => {
    return <div className={`${styles.form_wrapper} element`}>
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field
                component='input'
                name='email'
                placeholder='Email'
                validate={[required]}
                className={`${styles.form_item} ${styles.field}`}
            />
            {/* <input className={`${styles.form_item} ${styles.field}`} placeholder='Login' type="text"/> */}
            <Field
                component='input'
                name='password'
                placeholder='Password'
                validate={[required]}
                className={`${styles.form_item} ${styles.field}`}
            />
            {/* <input className={`${styles.form_item} ${styles.field}`} placeholder='Password' type="text"/> */}
            {props.error && <div className={styles.error}>{props.error}</div>}
            <button className={`${styles.form_item}`}>Log in</button>
            <div className={styles.config}>
                <div className={styles.remember}>
                    <span className={styles.remember_descr}>Remember me</span>
                    <Field
                        component='input'
                        type='checkbox'
                        name='rememberMe'
                    />
                    {/* <input type="checkbox"/> */}
                </div>
                <span className={styles.forgot}>Forgot your password?</span>
            </div>
        </form>
        <div className={styles.create_ac}>
            <span className={styles.create}>Create new account</span>
        </div>
    </div>
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('login'))
}

export default reduxForm({
    form: 'login',
    onSubmitSuccess: afterSubmit
})(LoginForm)