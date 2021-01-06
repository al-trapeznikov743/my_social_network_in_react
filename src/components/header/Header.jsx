import React, {useEffect, useRef, useState} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
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

    const toLogout = () => {
        props.logout()
        setEditMode(false)
    }

    const name = getNameString(splitBySpace(props.fullName || 'FullName'))


    // Detecting a Click Outside
    const menuNodeRef = useRef()
    const nodeClick = useRef()

    useEffect(() => {
        if(!menuNodeRef || !props.isAuth || !editMode) {
            return undefined
        }
        const handler = (e) => {
            if(nodeClick.current.contains(e.target)) {
                return undefined
            }
            if(!menuNodeRef.current.contains(e.target)) {
                setEditMode(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return  <div className={styles.header}>
        <img src={nasaLogo} alt="logo" className={styles.logo}/>
        <div className={styles.tools}>
            <img src={searchIcon} alt="img" className={styles.search_img}/>
            <input placeholder='Search' type='text' className={styles.top_search}/>
            {props.isAuth && <>
                <div
                    onClick={toggleEditMode}
                    className={styles.welcome}
                    ref={nodeClick}>
                    <span>{`Hey, ${name}!`}</span>
                    <img src={props.photo || withPhoto} alt="img" className={styles.pr_photo}/>
                    <i className={`fas fa-caret-down`}></i>
                </div>
                {editMode && <div
                    ref={menuNodeRef}
                    className={`${styles.tools_menu} element`}>
                    <span>Settings</span>
                    <span
                        className={`${styles.tools_logout}`}
                        onClick={toLogout}
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
    connect(mapStateToProps, {logout})
)(Header)