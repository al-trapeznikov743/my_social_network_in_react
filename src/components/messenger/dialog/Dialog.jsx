import React from 'react'
import styles from './Dialog.module.sass'
import Message from './message/Message'
import SendMessageForm from '../../forms/sendMessageForm/SendMessageForm'

const Dialog = (props) => {

    const onSendMessage = (value) => {
        props.sendMessage(value.newMessage)
    }

    return <div className={`${styles.dialog} element`}>
        <Message />
        {props.messages.map(message => {
            return <Message key={message.id} reverse={true} message={message.message}/>
        })}
        <SendMessageForm onSubmit={onSendMessage}/>
    </div>
}

export default Dialog