import React from 'react'
import {connect} from 'react-redux'
import Preloader from '../common/preloader/Preloader'
import SearchPanel from './searchPanel/SearchPanel'
import PeopleListContainer from './peopleList/PeopleListContainer'
import RecPage from './recPage/RecPage'
import styles from './People.module.sass'
import Sidebar from '../main/sidebar/Sidebar'

const People = (props) => {
    return <div className='wrapper'>
        <Sidebar />
        <div className={styles.people}>
            <SearchPanel />
            {props.isFetching ? <Preloader /> : null}
            <PeopleListContainer
                isFetching={props.isFetching}
            />
            <RecPage />
        </div>       
    </div>
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.peoplePage.isFetching
    }
}

export default connect(mapStateToProps, null)(People)