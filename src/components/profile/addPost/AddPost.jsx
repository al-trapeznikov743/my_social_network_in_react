import React from 'react'
import AddPostForm from '../../forms/AddPostForm'
import styles from './AddPost.module.sass'

const AddPost = (props) => {

    const onAddPost = (value) => {
        props.addPost(value.newPost)
    }

    return <div className={`${styles.add_post} element`}>
        <AddPostForm onSubmit={onAddPost}/>
    </div>
}



export default AddPost