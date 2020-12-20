import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./reducers/profileReducer";
import {peopleReducer} from './reducers/peopleReducer';


const reducers = combineReducers({
    profilePage: profileReducer,
    peoplePage: peopleReducer
})

const store = createStore(reducers)

window.store = store

export default store