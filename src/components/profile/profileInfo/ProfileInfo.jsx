import React from 'react'
import styles from './ProfileInfo.module.sass'
import withPhoto from '../../../img/withoutPhoto/large.jpg'

const ProfileInfo = (props) => {

    const postsCounter = props.posts.length

    const changeMainPhoto = (e) => {
        if(e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }

    return <div className={styles.info}>
        <div className={`${styles.wrapper} element`}>
            <img src={props.photo || withPhoto} alt="img" className={styles.photo}/>
            {props.isOwner
                && <div className={styles.inputFile_wrapper}>
                    <input id='file' className={styles.inputFile} type="file" onChange={changeMainPhoto}/>
                    <label className={styles.inputLabel} htmlFor='file'>
                        <i className={`fas fa-camera-retro ${styles.changePhotoIcon}`}></i>
                    </label>
                </div>}
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
                    <span>{postsCounter}</span>
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