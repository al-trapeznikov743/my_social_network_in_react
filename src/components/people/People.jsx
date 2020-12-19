import React from 'react'
import SearchPanel from './searchPanel/SearchPanel'
import PeopleList from './peopleList/PeopleList'
import RecPage from './recPage/RecPage'
import styles from './People.module.sass'

const People = () => {
    return <div className={styles.people}>
        <SearchPanel />
        <PeopleList />
        <RecPage />
    </div>
}

export default People