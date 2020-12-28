import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './reducers/appReducer'
import {authReducer} from './reducers/authReducer'
import {profileReducer} from "./reducers/profileReducer"
import {peopleReducer} from './reducers/peopleReducer'
import {messengerReducer} from './reducers/messengerReducer'


const reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    peoplePage: peopleReducer,
    messengerPage: messengerReducer, 
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store