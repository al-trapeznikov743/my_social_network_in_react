import React from 'react'
import {connect} from 'react-redux'
import {getNameString, splitBySpace} from '../../utils/stringActions'
import nasaLogo from '../../icons/NASA_logo.svg'
import searchIcon from '../../icons/search.svg'
//import headerPhoto from '../../img/Rick.jpg'
import styles from './Header.module.sass'

const Header = (props) => {

    const name = getNameString(splitBySpace(props.fullName))

    return  <div className={styles.header}>
        <img src={nasaLogo} alt="logo" className={styles.logo}/>
        <div className={styles.tools}>
            <img src={searchIcon} alt="img" className={styles.search_img}/>
            <input placeholder='Search' type='text' className={styles.top_search}/>
            <div className={styles.welcome}>
                <span>{`Hey, ${name}!`}</span>
                <img src={props.photo} alt="img" className={styles.pr_photo}/>
            </div>
        </div>
    </div>
}


const mapStateToProps = (state) => {
    return {
        fullName: state.profilePage.profile.fullName,
        photo: state.profilePage.profile.photos.small
    }
}

export default connect(mapStateToProps, null)(Header)