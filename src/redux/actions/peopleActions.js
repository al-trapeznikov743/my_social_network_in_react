import {FOLLOW, SET_CURRENT_PAGE, SET_USERS, SET_USERS_TOTAL_COUNT, UNFOLLOW} from '../types'
import {userAPI} from '../../api/api'


export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount
    }
}


// thunk-creators
export const getUsers = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))

        const response = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))
    }
}