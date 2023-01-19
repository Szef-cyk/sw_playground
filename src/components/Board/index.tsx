import React from 'react'
import boardBackground from '../../assets/boardBackground.jpg'
import styles from './index.module.scss'
const Board = () => {
    return (
        <>
            <div className={styles.background} style={{ backgroundImage: `url(${boardBackground})` }}>
                <div className={styles.boardContainer}>
                    <div className={styles.specialCard1}>
                        <div className={styles.specialCard}></div>
                    </div>
                    <div className={styles.specialCard2}>
                        <div className={styles.specialCard}></div>
                    </div>
                    <div className={styles.cardTop1}>
                        <div className={styles.card}></div>
                    </div>
                    <div className={styles.cardTop2}>
                        <div className={styles.card}></div>
                    </div>
                    <div className={styles.cardBottom1}>
                        <div className={styles.card}></div>
                    </div>
                    <div className={styles.cardBottom2}>
                        <div className={styles.card}></div>
                    </div>
                    <button className={styles.button}>End Turn</button>
                </div>
            </div>
        </>
    )
}

export default Board