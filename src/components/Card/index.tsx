import { MouseEventHandler } from 'react';
import { connect, useSelector } from 'react-redux';
import { selectLastCharacter } from '../../redux/selectors';
import { AddToDeck } from '../../redux/actions';
import styles from './index.module.css'
import { useDispatch } from 'react-redux';
import { Character } from '../../redux/features/types/types';
import { Dispatch } from 'redux';
import { RootState } from '../../redux/store';

const Card = () => {

    const character = useSelector(selectLastCharacter);
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(AddToDeck(character))
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <p className={styles.name}>{character?.name}</p>
                    <p className={styles.details}>Height: {character?.height}</p>
                    <p className={styles.details}>Gender: {character?.gender}</p>
                    <p className={styles.details}>Eye Color: {character?.eyecolor}</p>
                    <button onClick={handleSubmit as any}>Add To Your Collection</button>
                </div>
            </div>
        </div>
    )
}

export default Card

