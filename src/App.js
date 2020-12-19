import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './css/fontawesome.min.css'
import './css/solid.min.css'
import './css/bootstrap-grid.min.css'
import './sass/general/_general.sass'
import styles from './components/header/Header.module.sass'
import Header from './components/header/Header'
import Main from './components/main/Main'
import store from './redux/store'
//import Login from './components/login/Login'

const App = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <div className='app'>
                    <div className={styles.pageHeader}>
                        <div className='container'>
                            <Header />
                        </div>
                    </div>
                    <div className='pageBody'>
                        <div className='container'>
                            <Main />
                        </div>
                        {/* <Login /> */}
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    </>
}

export default App