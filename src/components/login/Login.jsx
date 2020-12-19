import React from 'react'
import Recent from './recent/Recent'
import LoginForm from './loginForm/LoginForm'
import styles from './Login.module.sass'

const Login = () => {
    return <>
        <div className={styles.login}>
            <div className='container'>
                <div className={styles.login_wrapper}>
                    <Recent />
                    <LoginForm />
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footer_wrapper}>
                    footer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque ratione ex pariatur ipsum minima.
                </div>
            </div>
        </footer>
    </>
}

export default Login