import {combineReducers, createStore} from 'redux'
import {profileReducer} from "./reducers/profileReducer";


const reducers = combineReducers({
    profilePage: profileReducer
})

const store = createStore(reducers)

export default store