import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import {required} from '../validators'
import styles from './SendMessageForm.module.sass'

const SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.new_message}>
        <div className={styles.wrapper}>
            <div className='link_icon'>
                <i className='fas fa-feather'></i>
            </div>
            <Field
                className={styles.field}
                component='textarea'
                name='newMessage'
                placeholder='Write a message...'
                validate={[required]}
            />
        </div>
        <div>
            <div className={styles.wrapper}>
                <div className={`link_icon ${styles.icon}`}>
                    <i className='fas fa-smile interaction'></i>
                </div>
                <div className={`link_icon ${styles.icon}`}>
                    <i className='fas fa-camera-retro interaction'></i>
                </div>
                <div className={`link_icon ${styles.icon}`}>
                    <i className='fas fa-music interaction'></i>
                </div>
                <div className={`link_icon ${styles.icon}`}>
                    <i className='fas fa-video interaction'></i>
                </div>
            </div>
            <button className={styles.button}>Send</button>
        </div>
    </form>
}


const afterSubmit = (result, dispatch) => {
    dispatch(reset('sendMessage'))
}

export default reduxForm({
    form: 'sendMessage',
    onSubmitSuccess: afterSubmit
})(SendMessageForm)