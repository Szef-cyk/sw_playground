import React from 'react'
import { useSelector } from 'react-redux';
import { selectCharacter } from '../../selectors';
import { RootState } from '../../store';
import styles from './index.module.css'

const Card = () => {
    const character = useSelector((state: RootState) => selectCharacter(state, 'Luke Skywalker'));

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <p className={styles.name}>{character?.name}</p>
                    <p className={styles.details}>Height: {character?.height}</p>
                    <p className={styles.details}>Gender: {character?.gender}</p>
                    <p className={styles.details}>Eye Color: {character?.eyecolor}</p>
                </div>
            </div>
        </div>
    )
}

export default Card