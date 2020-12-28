import {INITIALIZED_SUCCESS} from '../types'


const initialState = {
    initialized: true
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state
    }
}