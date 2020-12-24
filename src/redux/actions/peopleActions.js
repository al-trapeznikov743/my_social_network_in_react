import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_USERS,
    SET_USERS_TOTAL_COUNT,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING,
    UNFOLLOW} from '../types'
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
const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        userId
    }
}


// thunk-creators
export const getUsers = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        const response = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))
    }
}



export const updateFollow = (userId, followed) => {
    if (followed) {
        console.log('unfollow')
        return async (dispatch) => {
            dispatch(toggleFollowingInProgress(true, userId))

            const response = await userAPI.unfollow(userId)
            if(response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        }
    }
    console.log('follow')
    debugger
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        
        const response = await userAPI.follow(userId)
        console.log(response)
        if(response.data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}


/* export const pdateFollow = (userId, followed) => {
    const define = defineSubscriptionStatus(followed)

    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        const response = await define.apiMethod(userId)
        if(response.data.resultCode === 0) {
            dispatch(define.actionCreator(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}


const defineSubscriptionStatus = (followed) => {
    if(followed) {
        return {
            apiMethod: userAPI.unfollow,
            actionCreator: unfollow
        }
    }
    return {
        apiMethod: userAPI.follow,
        actionCreator: follow
    }
} */