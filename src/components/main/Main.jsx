import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Login from '../login/Login'
import Profile from '../profile/Profile'
import People from '../people/People'
import Messenger from '../messenger/Messenger'
import ScrollToTop from '../common/scrollToTop/ScrollToTop'

const Main = (props) => {
    return <>
        <ScrollToTop/>
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


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(Main)