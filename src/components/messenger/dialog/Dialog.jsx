import React from 'react'
import styles from './Dialog.module.sass'
import Message from './message/Message'
import SendMessage from './sendMessage/SendMessage'

const Dialog = () => {
    return <div className={`${styles.dialog} element`}>
        <Message />
        <Message reverse={true}/>
        <SendMessage />
    </div>
}

export default Dialog