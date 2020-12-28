import React, {useState} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../../redux/actions/authActions'
import {getNameString, splitBySpace} from '../../utils/stringActions'
import nasaLogo from '../../icons/NASA_logo.svg'
import searchIcon from '../../icons/search.svg'
import withPhoto from '../../img/withoutPhoto/small.jpg'
import styles from './Header.module.sass'

const Header = (props) => {

    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        if(editMode) {
            setEditMode(false)
            return undefined
        }
        setEditMode(true)
    }

    const startLogout = () => {
        props.logout()
        props.history.push('/login')
        console.log('Деавториpзация успешно завершена')
    }

    const name = getNameString(splitBySpace(props.fullName || 'FullName'))

    return  <div className={styles.header}>
        <img src={nasaLogo} alt="logo" className={styles.logo}/>
        <div className={styles.tools}>
            <img src={searchIcon} alt="img" className={styles.search_img}/>
            <input placeholder='Search' type='text' className={styles.top_search}/>
            {props.isAuth && <>
                <div onClick={toggleEditMode} className={styles.welcome}>
                    <span>{`Hey, ${name}!`}</span>
                    <img src={props.photo || withPhoto} alt="img" className={styles.pr_photo}/>
                    <i className={`fas fa-caret-down`}></i>
                </div>
                {editMode && <div className={`${styles.tools_menu} element`}>
                    <span>Settings</span>
                    <span
                        className={`${styles.tools_logout}`}
                        onClick={startLogout}
                    >Log out</span>
                </div>}
            </>}
        </div>
    </div>
}


const mapStateToProps = (state) => {
    return {
        fullName: state.profilePage.profile.fullName,
        photo: state.profilePage.profile.photos.small,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {logout}),
    withRouter
)(Header)