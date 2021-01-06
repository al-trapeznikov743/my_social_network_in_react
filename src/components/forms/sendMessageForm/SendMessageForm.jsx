import React from 'react'
import {Formik, Form, Field} from 'formik'
import styles from './SendMessageForm.module.sass'



const SendFormValidate = (value) => {
    const errors = {}
    return errors
}


const SendMessageForm = (props) => {
    const onSendMessage = (value, {setSubmitting}) => {
        props.sendMessage(value.newMessage)
        setSubmitting(false)
    }
    return <>
        <Formik
            initialValues={{newMessage: ''}}
            validate={SendFormValidate}
            onSubmit={onSendMessage}
        >
            {({isSubmitting}) => (
                <Form className={styles.new_message}>
                    <div className={styles.wrapper}>
                        <div className='link_icon'>
                            <i className='fas fa-feather'></i>
                        </div>
                        <Field
                            component='textarea'
                            //type='text'
                            name='newMessage'
                            placeholder='Write a message...'
                            className={styles.field}
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
                        <button type='submit' disabled={isSubmitting}>
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </>
}

export default SendMessageForm