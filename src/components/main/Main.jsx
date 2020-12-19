import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Profile from '../profile/Profile'
import People from '../people/People'
import Messenger from '../messenger/Messenger'
import styles from './Main.module.sass'

const Main = () => {
    return <>
        <div className={styles.main}>
            <Sidebar />
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/people' render={() => <People/>}/>
            <Route path='/messenger' render={() => <Messenger/>}/>
        </div>
    </>
}

export default Main