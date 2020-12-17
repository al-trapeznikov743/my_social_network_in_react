import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'

const App = () => {
    return <>
        <div className='pageHeader'>
            <div className='container'>
                <Header />
            </div>
        </div>
        <div className='pageBody'>
            <div className='container'>
                <Main />
            </div>
        </div>
    </>
}

export default App