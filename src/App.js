import React from 'react'
import './css/fontawesome.min.css'
import './css/solid.min.css'
import './css/bootstrap-grid.min.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import './styles/_general.sass'
import styles from './styles/Header.module.sass'

const App = () => {
    return <div className='app'>
        <div className={styles.pageHeader}>
            <div className='container'>
                <Header />
            </div>
        </div>
        <div className='pageBody'>
            <div className='container'>
                <Main />
            </div>
        </div>
    </div>
}

export default App