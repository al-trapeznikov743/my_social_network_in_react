import React from 'react'
import {connect} from 'react-redux'
import styles from './Post.module.sass'


const Post = (props) => {
    return <div className={`${styles.post}`}>
        {props.posts.map(post => {
            return <PostItem
                username={post.username}
                message={post.message}
                photo={props.photo}
            />
        })}
    </div>
}

const PostItem = (props) => {
    return <div className={`${styles.post_item} element`}>
        <div className={styles.information}>
            <img src={props.photo} alt="img" className={styles.information_photo}/>
            <div className={styles.information_descr}>
                <h2 className={styles.username}>{props.username}</h2>
                <span className={styles.date}>date 21 aug at 2:00 am</span>
            </div>
        </div>
        <div className={styles.content}>{props.message}</div>
        <div className={styles.interaction}>
            <div className={styles.icons}>
                <div className='link_icon'>
                    <i className={`fas fa-thumbs-up ${styles.icon} interaction`}></i>
                </div>
                <div className='link_icon'>
                    <i className={`fas fa-comment ${styles.icon} interaction`}></i>
                </div>
                <div className='link_icon'>
                    <i className={`fas fa-share ${styles.icon} interaction`}></i>
                </div>
            </div>
            <button>Delete</button>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        photo: state.profilePage.profile.photos.small,
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, null)(Post)