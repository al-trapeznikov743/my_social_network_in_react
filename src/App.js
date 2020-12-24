import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/actions/appActions'
import './css/fontawesome.min.css'
import './css/solid.min.css'
import './css/bootstrap-grid.min.css'
import './sass/general/_general.sass'
import styles from './components/header/Header.module.sass'
//import Preloader from './components/common/preloader/Preloader'
import Header from './components/header/Header'
import Main from './components/main/Main'
import store from './redux/store'
//import Login from './components/login/Login'



class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        console.log(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        // отлавливаем возможные не перехваченные rejects of promises
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        // unsubscribe
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        /* if(!this.props.initialized) {
            return <Preloader />
        } */
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
                {/* <Login /> */}
            </div>
        </div>
    }
}



const mapStateToProps = (state) => {
    return {
        init: state.app.initialized
    }
}

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App)



const MainApp = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </>
}

export default MainApp