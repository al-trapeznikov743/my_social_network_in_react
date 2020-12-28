import {stopSubmit} from 'redux-form'
import {authAPI} from '../../api/api'
import {SET_USER_DATA} from '../types'



const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}


// thunk-creators
export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authAPI.me()
        if(response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const errorMessage = response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}