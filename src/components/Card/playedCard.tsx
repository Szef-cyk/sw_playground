import { connect, useSelector } from 'react-redux';
import { selectLastCharacter } from '../../redux/selectors';
import styles from './index.module.scss'

interface CardProps {
    name: string;
    height: string;
    gender: string;
    eyecolor: string;
    margin: string;
    attack: number;
    type: string;
}
const PlayedCard: React.FC<CardProps> = ({ name, height, gender, eyecolor, margin, attack, type }) => {

    const cardClasses = `${styles.playedCard} ${type === 'Hero' || type === 'Jedi' ? styles.playedHero : ''} 
    ${type === 'Villain' || type === 'Bounty Hunter' ? styles.playedVillain : ''}`

    return (
        <div className={styles.playedCardContainer} style={{ margin: margin }}>
            <div className={cardClasses}>
                <div className={styles.playedHeader}>{name}</div>
                <div className={styles.playedImage}></div>
                <div className={styles.playedAttack}>{attack}</div>
                <div className={styles.playedInfo}>
                    <p className={styles.playedDetails}>Type: {type}</p>
                    <p className={styles.playedDetails}>Height: {height}</p>
                    <p className={styles.playedDetails}>Gender: {gender}</p>
                    <p className={styles.playedDetails}>Eye Color: {eyecolor}</p>
                </div>
            </div>
        </div>
    )
}


export default PlayedCard