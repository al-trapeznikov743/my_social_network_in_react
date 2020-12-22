import React from 'react'
import SearchPanel from './searchPanel/SearchPanel'
import PeopleListContainer from './peopleList/PeopleListContainer'
import RecPage from './recPage/RecPage'
import styles from './People.module.sass'

const People = () => {
    return <div className={styles.people}>
        <SearchPanel />
        <PeopleListContainer />
        <RecPage />
    </div>
}

export default People