import React from 'react'
import styles from './LoginForm.module.sass'

const LoginForm = () => {
    return <div className={`${styles.form_wrapper} element`}>
        <form className={styles.form}>
            <input className={`${styles.form_item} ${styles.field}`} placeholder='Login' type="text"/>
            <input className={`${styles.form_item} ${styles.field}`} placeholder='Password' type="text"/>
            <button className={`${styles.form_item}`}>Log in</button>
            <div className={styles.config}>
                <div className={styles.remember}>
                    <span className={styles.remember_descr}>Remember me</span>
                    <input type="checkbox"/>
                </div>
                <span className={styles.forgot}>Forgot your password?</span>
            </div>
        </form>
        <div className={styles.create_ac}>
            <span className={styles.create}>Create new account</span>
        </div>
    </div>
}

export default LoginForm