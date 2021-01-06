import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions/authActions'
import Recent from './recent/Recent'
import LoginForm from '../forms/loginForm/LoginForm'
import styles from './Login.module.sass'

const Login = (props) => {

    if(props.isAuth) {
        return <Redirect to='/profile' />
    }

    return <div className={styles.login_parent}>
        <div className={styles.login}>
            <div className='container'>
                <div className={styles.login_wrapper}>
                    <Recent />
                    <LoginForm login={props.login} />
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
    </div>
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)