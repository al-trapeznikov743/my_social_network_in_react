import React from 'react'
import styles from '../../../styles/ProfileInfo.module.sass'
import profilePhoto from '../../../img/Rick.jpg'

const ProfileInfo = () => {
    return <div className={styles.info}>
        <div className={`${styles.wrapper} element`}>
            <img src={profilePhoto} alt="img" className={styles.photo}/>
            <span className={styles.nickname}>@john_Dev</span>
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

export default ProfileInfo