import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {addPost, deletePost, getProfile, getStatus} from '../../redux/actions/profileActions'
import ProfileInfo from './profileInfo/ProfileInfo'
import UserInfo from './userInfo/UserInfo'
import AddPost from './addPost/AddPost'
import Post from './post/Post'
import styles from './Profile.module.sass'

class Profile extends React.Component {

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.autorizeId
            if(!userId) {
                //this.props.history.push('/login')
                console.log('Авторизируйся, гандон!')
                return undefined
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        const {photos, fullName, contacts} = this.props.profile

        const photoSmall = photos.small
        const photoLarge = photos.large

        return <div className={styles.profile}>
            <ProfileInfo
                photo={photoLarge}
            />
            <UserInfo
                fullName={fullName}
                status={this.props.status}
                contacts={contacts}
            />
            <AddPost
                addPost={this.props.addPost}
            />
            <Post
                photo={photoSmall}
                posts={this.props.posts}
                deletePost={this.props.deletePost}
            />
        </div>
    }
}



const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        autorizeId: state.auth.userId
    }
}


export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        addPost,
        deletePost,
    }),
    withRouter
)(Profile)