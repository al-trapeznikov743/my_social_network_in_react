import React from 'react'
import {connect} from 'react-redux'
import {follow, unfollow} from '../../../redux/actions/peopleActions'
import styles from './PeopleList.module.sass'

const PeopleList = (props) => {
    return <div className={styles.list}>
        {
            props.users.map(user => {
                return <PeopleListItem
                    id={user.id}
                    photo={user.photos.small}
                    name={user.name}
                    status={user.status}
                    followed={user.followed}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            })
        }
    </div>
}

const PeopleListItem = (props) => {

    const toggleFollow = (followed) => {
        if(followed) {
            props.unfollow(props.id)
        } else {
            props.follow(props.id)
        }
    }

    return <div className={`${styles.item} element`}>
        <div className={styles.descr}>
            <img className={styles.photo} src={props.photo} alt="img"/>
            <div className={styles.wrapper}>
                <span className={styles.username}>{props.name}</span>
                <span className={styles.status}>{props.status}</span>
            </div>
        </div>
        <div className={styles.buttons}>

            <button
                onClick={() => {toggleFollow(props.followed)}}
            >{props.followed ? 'Unfollow' : 'Follow'}</button>
            <button>Message</button>

        </div>
    </div>
}



const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow
})(PeopleList)