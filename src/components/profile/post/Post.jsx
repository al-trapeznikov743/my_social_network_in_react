import React from 'react'
import styles from './Post.module.sass'
import postIMG from '../../../img/Rick.jpg'

const Post = () => {
    return <div className={`${styles.post} element`}>
        <div className={styles.information}>
            <img src={postIMG} alt="img" className={styles.information_photo}/>
            <div className={styles.information_descr}>
                <h2 className={styles.username}>Rick Sanchez</h2>
                <span className={styles.date}>date 21 aug at 2:00 am</span>
            </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam, sapiente nihil eos ex placeat magni numquam obcaecati dolorum. Delectus tempora ipsa, nihil aliquam ex quas numquam earum atque repellat quis vero voluptate obcaecati tenetur sunt repudiandae, facere minus doloremque ea optio eum excepturi similique fuga. Dolorem molestias labore accusamus.</div>
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

export default Post