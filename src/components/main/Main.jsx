import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from '../login/Login'
import Profile from '../profile/Profile'
import People from '../people/People'
import Messenger from '../messenger/Messenger'

const Main = () => {
    return <>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile'/>} />
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/profile/:userId?' render={() => <Profile/>}/>
            <Route path='/people' render={() => <People/>}/>
            <Route path='/messenger' render={() => <Messenger/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    </>
}

export default Main