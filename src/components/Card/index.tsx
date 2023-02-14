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
const Card: React.FC<CardProps> = ({ name, height, gender, eyecolor, margin, attack, type }) => {

    const cardClasses = `${styles.card} ${type === 'Hero' || type === 'Jedi' ? styles.hero : ''} 
    ${type === 'Villain' || type === 'Bounty Hunter' ? styles.villain : ''}`

    return (
        <div className={styles.container} style={{ margin: margin }}>
            <div className={cardClasses} >
                <div className={styles.header}>{name}</div>
                <div className={styles.image}></div>
                <div className={styles.attack}>{attack}</div>
                <div className={styles.info}>
                    <p className={styles.details}>Type: {type}</p>
                    <p className={styles.details}>Height: {height}</p>
                    <p className={styles.details}>Gender: {gender}</p>
                    <p className={styles.details}>Eye Color: {eyecolor}</p>
                </div>
            </div>
        </div>
    )
}


export default Card