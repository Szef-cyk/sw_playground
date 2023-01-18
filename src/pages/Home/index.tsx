import React from 'react'
import SearchBar from '../../components/SearchBar'
import styles from './index.module.css'
import { usePeople } from '../../apollo/hooks/usePeople'
const Home = () => {
    const objPeople = usePeople()
    return (
        <>
            {objPeople.loading ? <div className={styles.loading}>loading...</div>
                :
                <div className={styles.container}>
                    <SearchBar />
                </div>
            }
        </>
    )
}

export default Home