import React from 'react'
import styles from './SearchPanel.module.sass'

const SearchPanel = () => {
    return <div className={`${styles.search_panel} element`}>
        <div className={styles.line}>
            <div className='link_icon'>
                <i className='fas fa-search'></i>
            </div>
            <input className={styles.field} placeholder='Search people' type="text"/>
        </div>
        <div>
            <button>Online only</button>
            <button>Followers | Following</button>
        </div>
    </div>
}

export default SearchPanel