import styles from '../../components/Card/index.module.scss' //STYLES COME FROM DIFFERENT FOLDER
import cn from 'classnames';
interface DeckCardProps {
    name: string;
    height: number;
    gender: string;
    eyecolor: string;
    margin: string;
    attack: number;
    type: string;
}
const DeckCard: React.FC<DeckCardProps> = ({ name, height, gender, eyecolor, margin, attack, type }) => {

    const cardClasses = `${styles.card} ${type === 'Hero' || type === 'Jedi' ? styles.hero : ''} 
    ${type === 'Villain' || type === 'Bounty Hunter' ? styles.villain : ''}`

    return (
        <div className={styles.container} >
            <div className={cardClasses} style={{ margin: margin }}>
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

export default DeckCard