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
const CardBack: React.FC<CardProps> = ({ name, height, gender, eyecolor, margin, attack, type }) => {

    const cardClasses = `${styles.cardBack} ${type === 'Hero' || type === 'Jedi' ? styles.hero : ''} 
    ${type === 'Villain' || type === 'Bounty Hunter' ? styles.villain : ''}`

    return (
        <div className={styles.container} style={{ margin: margin }}>
            <div className={cardClasses} >
                <div className={styles.imageBack}></div>
            </div>
        </div>
    )
}


export default CardBack