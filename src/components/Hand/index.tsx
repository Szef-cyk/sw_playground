import React from 'react'
import { selectDeck } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../Card'

const Hand = () => {
    const deck = useSelector(selectDeck)
    console.log(deck)
    const cardsNumber = deck.length
    const calculateDeckMargin = (cardsNumber: number): string => {
        if (cardsNumber > 6) {
            return `0 -24rem 0 0`
        }
        return `0 ${cardsNumber * -4}rem 0 0`
    }
    const calculateContainerMargin = (cardsNumber: number): string => {
        if (cardsNumber > 6) {
            return `0 24rem 0 0`
        }
        return `0 ${cardsNumber * 4}rem 0 0`
    }

    const margin = calculateDeckMargin(cardsNumber)
    const containerMargin = calculateContainerMargin(cardsNumber)
    return (
        <><div className={styles.handContainer}></div>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {deck.map((character) => {
                    return (
                        <div className={styles.hover}>
                            <Card key={character.character.id} {...character.character} margin={margin}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Hand