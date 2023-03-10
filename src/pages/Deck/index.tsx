import { selectDeckOne } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../../components/Card'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import calculateContainerMargin from '../../utils/calculateContainerMargin'
import { Link } from 'react-router-dom'

const Deck = () => {
    const deck = useSelector(selectDeckOne)
    const deckOne = deck
    const margin = calculateDeckMargin(deckOne.length)
    const containerMargin = calculateContainerMargin(deckOne.length)
    return (
        <>
            <div className={styles.containerHeading}>
                <h1 className={styles.heading}>Your Cards</h1>
            </div>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {deckOne.map((character) => {
                    return <Card key={character.id} {...character} margin={margin} />
                })}
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.button}>
                    <Link to='/deckCreator' className={styles.btnHeading}>Create New Deck</Link>
                </button>
            </div>
        </>
    )
}

export default Deck