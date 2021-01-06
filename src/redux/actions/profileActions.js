import {profileAPI} from '../../api/api'
import {
    ADD_POST,
    DELETE_POST,
    SET_AVA_SUCCESS,
    SET_STATUS,
    SET_USER_PROFILE} from '../types'



export const addPost = (newPostValue) => {
    return {
        type: ADD_POST,
        newPostValue
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
const setAvatar = (photos) => {
    return {
        type: SET_AVA_SUCCESS,
        photos
    }
}

// thunk-creators
export const getProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const updateAvatar = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.updateAvatar(file)
        if(response.data.resultCode === 0) {
            dispatch(setAvatar(response.data.data.photos))
        }
    }
}
export const updateProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const response = await profileAPI.updateProfile(profile)
        if(response.data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            // организовать stopSubmit
            const errorMessage = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            return Promise.reject(errorMessage)
        }
    }
}