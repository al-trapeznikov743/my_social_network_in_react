import {Formik, Form, Field} from 'formik'
import styles from '../../profile/addPost/AddPost.module.sass'
import * as yup from 'yup'



const AddPostForm = (props) => {
    const validationSchema = yup.object().shape({
        newPost: yup.string().required('Required field')
    })
    const onAddPost = (value, {setSubmitting, resetForm}) => {
        props.addPost(value.newPost)
        setSubmitting(false)
        resetForm()
    }
    return <>
        <Formik
            initialValues={{newPost: ''}}
            onSubmit={onAddPost}
            validationSchema={validationSchema}
        >
            {({
                isSubmitting,
                isValid,
                touched,
                errors,
                handleChange,
                handleBlur,
                dirty
            }) => (
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
                                /* onChange={handleChange}
                                onBlur={handleBlur} */
                                className={styles.field}
                            />
                            {touched.newPost && errors.newPost && <div>{errors.newPost}</div>}
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
                        <button
                            type='submit'
                            disabled={isSubmitting || !isValid}
                        >
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </>
}

export default AddPostForm