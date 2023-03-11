import { selectDeckOne } from '../../redux/selectors'
import calculateContainerMargin from '../../utils/calculateContainerMargin'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'

const DeckCreator = () => {
    const deck = useSelector(selectDeckOne)
    const deckOne = deck
    const margin = calculateDeckMargin(deckOne.length)
    // const margin = '0 -10rem 0 0 '
    const containerMargin = calculateContainerMargin(deckOne.length)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Welcome to Deck Creator</h1>
                </div>
                <div className={styles.choosenCards}>
                    <div className={styles.card}>1</div>
                    <div className={styles.card}>2</div>
                    <div className={styles.card}>3</div>
                    <div className={styles.card}>4</div>
                    <div className={styles.card}>5</div>
                    <div className={styles.card}>6</div>
                    <button className={styles.button}>Create New Deck</button>
                </div>
                <div className={styles.cardsContainer} style={{ margin: containerMargin }}>
                    {deckOne.map((character) => {
                        return <Card key={character.id} {...character} margin={margin} />
                    })}
                </div>
            </div>
        </>
    )
}

export default DeckCreator