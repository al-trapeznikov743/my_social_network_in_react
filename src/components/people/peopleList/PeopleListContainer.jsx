import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {follow, unfollow, getUsers} from '../../../redux/actions/peopleActions'
import PeopleList from './PeopleList'

const PeopleListContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
        // eslint-disable-next-line
    }, [])

    const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    const toggleFollow = (followed, id) => {
        if(followed) {
            props.unfollow(id)
        } else {
            props.follow(id)
        }
    }

    return <PeopleList
        users={props.users}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        onPageChanged={onPageChanged}
        toggleFollow={toggleFollow}
    />
}

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        currentPage: state.peoplePage.currentPage,
        pageSize: state.peoplePage.pageSize,
        totalCount: state.peoplePage.totalCount
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(PeopleListContainer)