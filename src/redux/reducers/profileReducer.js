import {getProfileState} from "./stateSections/profileSection"

const profile = getProfileState()

const initialState = {
    posts: [
        {id: 1, username: 'User Name', message: 'What you need?'},
        {id: 2, username: 'User Name', message: 'Hello, world...'}
    ],
    profile: profile,
    status: 'Nigga'
}

export const profileReducer = (state = initialState, action) => {
        return state
}