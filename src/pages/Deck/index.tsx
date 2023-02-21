import React from 'react'
import { selectDeckOne } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../../components/Card'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import calculateContainerMargin from '../../utils/calculateContainerMargin'

const Deck = () => {
    const deck = useSelector(selectDeckOne)
    const deckOne = deck
    const margin = calculateDeckMargin(deckOne.length)
    const containerMargin = calculateContainerMargin(deckOne.length)
    return (
        <>
            <div className={styles.heading}>YOUR DECK:</div>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {deckOne.map((character) => {
                    return <Card key={character.id} {...character} margin={margin} />
                })}
            </div>
        </>
    )
}

export default Deck