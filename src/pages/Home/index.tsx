import React from 'react'
import SearchBar from '../../components/SearchBar'
import styles from './index.module.css'
import Card from '../../components/Card'

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <SearchBar />
            </div>
            <Card />
        </>
    )
}

export default Home