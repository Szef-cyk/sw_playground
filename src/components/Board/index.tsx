import React from 'react'
import boardBackground from '../../assets/boardBackground.jpg'
import styles from './index.module.scss'
const Board = () => {
    return (
        <div className={styles.background} style={{ backgroundImage: `url(${boardBackground})` }}>
        </div>
    )
}

export default Board