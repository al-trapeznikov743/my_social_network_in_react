import React from 'react'
import {connect} from 'react-redux'
import styles from './ProfileInfo.module.sass'

const ProfileInfo = (props) => {

    return <div className={styles.info}>
        <div className={`${styles.wrapper} element`}>
            <img src={props.photo} alt="img" className={styles.photo}/>
            <span className={styles.nickname}>@rick_Dev</span>
            <div className={styles.place}>
                <div className={styles.link_icon}>
                    <i className='fas fa-map-marker-alt'></i>
                </div>
                <span>Los Angeles</span>
            </div>
            <div className={styles.activity}>
                <div className={styles.value}>
                    <span className={styles.prop}>Posts</span>
                    <span>7</span>
                </div>
                <div className={styles.value}>
                    <span className={styles.prop}>Followers</span>
                    <span>42</span>
                </div>
                <div className={styles.value}>
                    <span className={styles.prop}>Following</span>
                    <span>69</span>
                </div>
            </div>
        </div>
        <div className={`${styles.multimedia} element`}>
            <span>Videos</span>
        </div>
        <div className={`${styles.multimedia} element`}>
            <span>Music</span>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        photo: state.profilePage.profile.photos.large
    }
}

export default connect(mapStateToProps, null)(ProfileInfo)