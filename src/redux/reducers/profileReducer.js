import {getProfileState} from "./stateSections/profileSection"

const profile = getProfileState()

const initialState = {
    posts: [
        {id: 1, username: 'Rick Sanchez', message: 'What you need?'},
        {id: 2, username: 'Rick Sanchez', message: 'Hello, world...'}
    ],
    profile: profile,
    status: 'Nigga'
}

export const profileReducer = (state = initialState, action) => {
        return state
}