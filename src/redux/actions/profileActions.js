import {profileAPI} from "../../api/api"
import {ADD_POST, DELETE_POST, SET_STATUS, SET_USER_PROFILE} from "../types"



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
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
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