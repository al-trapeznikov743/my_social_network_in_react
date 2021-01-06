import React from 'react'
import AddPostForm from '../../forms/addPostForm/AddPostForm'
//import AddPostForm from '../../forms/addPostForm/AddPostForm'
import styles from './AddPost.module.sass'

const AddPost = (props) => {
    return <div className={`${styles.add_post} element`}>
        <AddPostForm addPost={props.addPost}/>
    </div>
}



export default AddPost