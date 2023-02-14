import React from 'react'
import { selectDeck } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../../components/Card'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import calculateContainerMargin from '../../utils/calculateContainerMargin'

const Deck = () => {
    const deck = useSelector(selectDeck)
    const margin = calculateDeckMargin(deck.length)
    // const margin = ' 0 -50px 0 0'
    const containerMargin = calculateContainerMargin(deck.length)
    return (
        <>
            <div className={styles.heading}>YOUR DECK:</div>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {deck.map((character) => {
                    return <Card key={character.id} {...character} margin={margin} />
                })}
            </div>
        </>
    )
}

export default Deck