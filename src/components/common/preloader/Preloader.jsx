import React from 'react'
import loadImg from '../../../img/isFetching.jpg'
import styles from './Preloader.module.sass'

const Preloader = () => {
    return <img className={styles.preloader} src={loadImg} alt='img'/>
}

export default Preloader