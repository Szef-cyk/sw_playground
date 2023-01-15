import { connect, useSelector } from 'react-redux';
import { selectLastCharacter } from '../../redux/selectors';
import styles from './index.module.scss'

const Card = () => {

    const character = useSelector(selectLastCharacter);

    const cardClasses = `${styles.card} ${character?.type === 'Hero' || character?.type === 'Jedi' ? styles.hero : ''} 
    ${character?.type === 'Villain' || character?.type === 'Bounty Hunter' ? styles.villain : ''}`

    return (
        <div className={styles.container}>
            <div className={cardClasses}>
                <div className={styles.header}>{character?.name}</div>
                <div className={styles.image}></div>
                <div className={styles.attack}>{character?.attack}</div>
                <div className={styles.info}>
                    <p className={styles.details}>Type: {character?.type}</p>
                    <p className={styles.details}>Height: {character?.height}</p>
                    <p className={styles.details}>Gender: {character?.gender}</p>
                    <p className={styles.details}>Eye Color: {character?.eyecolor}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

