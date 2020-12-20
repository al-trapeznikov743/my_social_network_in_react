import p_small from '../../img/withoutPhoto/small.jpg'
import p_large from '../../img/withoutPhoto/large.jpg'
import {FOLLOW, UNFOLLOW} from '../types'

const initialState = {
    users: [
        {id: 1, name: 'Johan Nendell', photos: {small: p_small, large: p_large}, status: 'azazaz', followed: false},
        {id: 2, name: 'Vera Malinovskaya', photos: {small: p_small, large: p_large}, status: 'i know', followed: true},
        {id: 3, name: 'Dmitriy Djodjich', photos: {small: p_small, large: p_large}, status: 'vey', followed: false}
    ],
    totalCount: 3,
    error: null
}

export const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        default: return state
    }
}