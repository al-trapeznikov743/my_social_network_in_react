import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './PeopleList.module.sass'
import withPhoto from '../../../img/withoutPhoto/small.jpg'
import Paginator from '../../common/Paginator'

const PeopleList = (props) => {

    return <div className={styles.list_wrapper}>
        <div className={styles.list}>
            <Paginator
                //totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(user => {
                    return <PeopleListItem
                        key={user.id}
                        id={user.id}
                        photo={user.photos.small}
                        name={user.name}
                        status={user.status}
                        followed={user.followed}
                        toggleFollow={props.toggleFollow}
                    />
                })
            }
        </div>
        <div className={styles.detector}></div>
    </div>
}

const PeopleListItem = (props) => {

    return <div className={`${styles.item} element`}>
        <div className={styles.descr}>
            <NavLink to={`/profile/${props.id}`}>
                <img className={styles.photo} src={props.photo || withPhoto} alt="img"/>
            </NavLink>
            <div className={styles.wrapper}>
                <span className={styles.username}>{props.name}</span>
                <span className={styles.status}>{props.status}</span>
            </div>
        </div>
        <div className={styles.buttons}>

            <button
                onClick={() => {props.toggleFollow(props.followed, props.id)}}
            >{props.followed ? 'Unfollow' : 'Follow'}</button>
            <button>Message</button>

        </div>
    </div>
}

export default PeopleList