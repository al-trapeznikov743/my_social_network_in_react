import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
    addPost,
    deletePost,
    getProfile,
    getStatus,
    updateStatus,
    updateAvatar,
    updateProfile} from '../../redux/actions/profileActions'
import Preloader from '../common/preloader/Preloader'
import Sidebar from '../main/sidebar/Sidebar'
import ProfileInfo from './profileInfo/ProfileInfo'
import ProfileData from './profileData/ProfileData'
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
                this.props.history.push('/login')
                return undefined
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if(!this.props.autorizeId) {
            return <Preloader />
        }
        const {
            aboutMe,
            contacts,
            fullName,
            lookingForAJob,
            lookingForAJobDescription,
            photos} = this.props.profile

        const isOwner = !this.props.match.params.userId

        const photoSmall = photos.small
        const photoLarge = photos.large

        return <div className='wrapper'>
                <Sidebar />
                <div className={styles.profile}>
                    <ProfileInfo
                        photo={photoLarge}
                        isOwner={isOwner}
                        updateAvatar={this.props.updateAvatar}
                        posts={this.props.posts}
                    />
                    <ProfileData
                        fullName={fullName}
                        status={this.props.status}
                        contacts={contacts}
                        aboutMe={aboutMe}
                        updateStatus={this.props.updateStatus}
                        updateProfile={this.props.updateProfile}
                        isOwner={isOwner}
                        lookingForAJob={lookingForAJob}
                        lookingForAJobDescription={lookingForAJobDescription}
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
        updateStatus,
        updateAvatar,
        updateProfile,
        addPost,
        deletePost,
    }),
    withRouter
)(Profile)