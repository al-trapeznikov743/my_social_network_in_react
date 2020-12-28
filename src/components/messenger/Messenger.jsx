import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {sendMessage} from '../../redux/actions/messengerActions'
import Sidebar from '../main/sidebar/Sidebar'
import Dialog from './dialog/Dialog'
import UserList from './userLIst/UserList'
import styles from './Messenger.module.sass'

const Messenger = (props) => {

    if(!props.isAuth) {
        return <Redirect to='/login' />
    }

    return <div className='wrapper'>
        <Sidebar />
        <div className={styles.messenger}>
            <UserList users={props.users}/>
            <Dialog
                sendMessage={props.sendMessage}
                messages={props.messages}
            />
        </div>      
    </div>
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.messengerPage.dialogs,
        messages: state.messengerPage.messages
    }
}

export default connect(mapStateToProps, {sendMessage})(Messenger)