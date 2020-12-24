import {INITIALIZED_SUCCESS} from '../types'
import {getAuthUserData} from './authActions'

const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}


// thunk-creators
export const initializeApp = () => {
    return (dispatch) => {
        const successPromise = dispatch(getAuthUserData())
        successPromise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}