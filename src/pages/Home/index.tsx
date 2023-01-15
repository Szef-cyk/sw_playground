import React from 'react'
import SearchBar from '../../components/SearchBar'
import styles from './index.module.css'

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <SearchBar />
            </div>
        </>
    )
}

export default Home