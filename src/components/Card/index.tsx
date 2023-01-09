import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCharacter, selectLastCharacter } from '../../selectors';
import { RootState, store } from '../../store';
import styles from './index.module.css'
import { Character } from '../../features/types/types';
const Card = () => {
    // const selectID = (state: RootState): string => state.characters[0].id

    // const id = useSelector((state: RootState) => selectID(state))

    const name = 'Luke Skywalker'
    const character = useSelector(selectLastCharacter);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <p className={styles.name}>{character?.name}</p>
                    <p className={styles.details}>Height: {character?.height}</p>
                    <p className={styles.details}>Gender: {character?.gender}</p>
                    <p className={styles.details}>Eye Color: {character?.eyecolor}</p>
                    <button>Add To Your Collection</button>
                </div>
            </div>
        </div>
    )
}

export default Card

