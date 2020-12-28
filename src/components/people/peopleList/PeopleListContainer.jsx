import React, {useCallback, useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import {updateFollow, getUsers} from '../../../redux/actions/peopleActions'
import PeopleList from './PeopleList'

const PeopleListContainer = (props) => {

    const [pageMode, setPageMode] = useState(true)

    // pagination
    const pageCount = Math.ceil(props.totalCount/props.pageSize)

    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i)
    }

    const lastPage = pages[pages.length-1]


    // intersectionObserver
    const loading = props.isFetching

    const onPageChanged = (entries) => {
        if(loading || pageMode) {
            return undefined
        }
        if(entries[0].intersectionRatio > 0) {
            const nextPage = props.currentPage + 1
            if (nextPage > lastPage) {
                return undefined
            }
            props.getUsers(nextPage, props.pageSize)
            console.log('Подгрузка')
        }
    }


    const observer = useRef()
    const options = {
        root: null,
        rootMargin: '400px',
        threshold: 0.1
    }

    const onPageChangedRef = useCallback(node => {
        if(observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(onPageChanged, options)
        if(node) {
            observer.current.observe(node)
        }
    })



    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize).then(() => {
            setPageMode(false)
        })
        // eslint-disable-next-line
    }, [])

    /* const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    } */


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
        onPageChangedRef={onPageChangedRef}
        //followingInProgress={props.followingInProgress}
        updateFollow={updateFollow}
    />
}

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        currentPage: state.peoplePage.currentPage,
        pageSize: state.peoplePage.pageSize,
        totalCount: state.peoplePage.totalCount,
        //followingInProgress: state.peoplePage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    getUsers,
    updateFollow
})(PeopleListContainer)