import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {updateFollow, getUsers} from '../../../redux/actions/peopleActions'
import PeopleList from './PeopleList'

const PeopleListContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
        // eslint-disable-next-line
    }, [])

    const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    /* const toggleFollow = (followed, id) => {
        if(followed) {
            props.unfollow(id)
        } else {
            props.follow(id)
        }
    } */

    return <PeopleList
        users={props.users}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        onPageChanged={onPageChanged}
        followingInProgress={props.followingInProgress}
        updateFollow={updateFollow}
    />
}

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        currentPage: state.peoplePage.currentPage,
        pageSize: state.peoplePage.pageSize,
        totalCount: state.peoplePage.totalCount,
        followingInProgress: state.peoplePage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    getUsers,
    updateFollow
})(PeopleListContainer)