import {userAPI} from "../../api/api"
import {follow, unfollow} from "./peopleActions"

export const defineSubscriptionStatus = (followed) => {
    if(followed) {
        return {
            apiMethod: userAPI.unfollow.bind(userAPI),
            actionCreator: unfollow
        }
    }
    return {
        apiMethod: userAPI.follow.bind(userAPI),
        actionCreator: follow
    }
}