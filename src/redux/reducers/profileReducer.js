import {ADD_POST, DELETE_POST, SET_AVA_SUCCESS, SET_STATUS, SET_USER_PROFILE} from '../types'
import {getProfileState} from './stateSections/profileSection'
import {getLastChild} from '../../utils/arrayManipulations'

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
    switch(action.type) {
        case ADD_POST: {
            let postId
            if(state.posts.length !== 0) {
                postId = getLastChild(state.posts).id+1
            } else {
                postId = 1
            }
            const newPost = {
                id: postId,
                username: 'Rick Sanchez',
                message: action.newPostValue
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.postId)]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_AVA_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state
    }
}