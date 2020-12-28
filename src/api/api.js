// импортируем всё что есть в axios в один объект => axios
import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "652ff7af-5c6a-483c-bc06-295961b6a41e"
    }
})


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email,password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    updateAvatar(file) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`, formData)
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile)
    }
}