import {FOLLOW, SET_CURRENT_PAGE, SET_USERS, SET_USERS_TOTAL_COUNT, UNFOLLOW} from '../types'

const initialState = {
    users: [],
    totalCount: 3,
    pageSize: 15,
    currentPage: 1,
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
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        default: return state
    }
}


/* [
    {id: 1, name: 'Johan Nendell', photos: {small: p_small, large: p_large}, status: 'azazaz', followed: false},
    {id: 2, name: 'Vera Malinovskaya', photos: {small: p_small, large: p_large}, status: 'i know', followed: true},
    {id: 3, name: 'Dmitriy Djodjich', photos: {small: p_small, large: p_large}, status: 'vey', followed: false}
] */