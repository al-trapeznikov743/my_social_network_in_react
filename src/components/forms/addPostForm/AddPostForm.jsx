import {Formik, Form, Field} from 'formik'
import styles from '../../profile/addPost/AddPost.module.sass'


/* const AddPostFormValidate = (value) => {
    const errors = {}
    return errors
} */

const AddPostForm = (props) => {
    const onAddPost = (value, {setSubmitting}) => {
        props.addPost(value.newPost)
        setSubmitting(false)
    }
    return <>
        <Formik
            initialValues={{newPost: ''}}
            /* validate={AddPostFormValidate} */
            onSubmit={onAddPost}
        >
            {({isSubmitting}) => (
                <Form>
                    <div className={styles.field_wrapper}>
                        <div className={styles.new}>
                            <div className='link_icon'>
                                <i className='fas fa-feather'></i>
                            </div>
                            <Field
                                type='text'
                                name='newPost'
                                placeholder="What's new?"
                                className={styles.field}
                            />
                        </div>
                        <div className='link_icon'>
                            <i className={`fas fa-smile ${styles.icon} interaction`}></i>
                        </div>
                    </div>
                    <div className={styles.interaction}>
                        <div className={styles.icons}>
                            <div className='link_icon'>
                                <i className={`fas fa-camera-retro ${styles.icon} interaction`}></i>
                            </div>
                            <div className='link_icon'>
                                <i className={`fas fa-music ${styles.icon} interaction`}></i>
                            </div>
                            <div className='link_icon'>
                                <i className={`fas fa-video ${styles.icon} interaction`}></i>
                            </div>
                        </div>
                        <button type='submit' disabled={isSubmitting}>
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </>
}

export default AddPostForm