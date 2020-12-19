import React from 'react'
import styles from './Profile.module.sass'
import ProfileInfo from './profileInfo/ProfileInfo'
import UserInfo from './userInfo/UserInfo'
import AddPost from './addPost/AddPost'
import Post from './post/Post'

const Profile = () => {
    return <div className={styles.profile}>
        <ProfileInfo />
        <UserInfo />
        <AddPost />
        <Post />
    </div>
}

export default Profile