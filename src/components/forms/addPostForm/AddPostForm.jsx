import {Field, reduxForm} from 'redux-form'
import {required} from '../validators'
import styles from '../../profile/addPost/AddPost.module.sass'


const AddPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div className={styles.field_wrapper}>
            <div className={styles.new}>
                <div className='link_icon'>
                    <i className='fas fa-feather'></i>
                </div>
                <Field
                    component='input'
                    name='newPost'
                    placeholder="What's new?"
                    className={styles.field}
                    validate={[required]}
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
            <button>Send</button>
        </div>
    </form>
}


export default reduxForm({form: 'addPost'})(AddPostForm)