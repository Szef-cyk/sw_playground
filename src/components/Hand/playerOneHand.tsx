import React, { useState } from 'react'
import { selectDeck, selectHand, selectPlayedCards } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../Card'
import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import calculateContainerMargin from '../../utils/calculateContainerMargin'
import { Attack, Played } from '../../redux/actions'
import { Character } from '../../redux/features/types/types'



const PlayerOneHand: React.FC<{ playPoints: number, setPlayPoints: React.Dispatch<React.SetStateAction<number>> }> = ({ playPoints, setPlayPoints }) => {
    const deck = useSelector(selectDeck)
    const [hand, setHand] = useState(deck.slice())
    const played = useSelector(selectPlayedCards)
    const dispatch = useDispatch();
    const chooseCard = (id: string) => {
        if (played.length === 2) {
            return alert('You played all the cards. End Turn.')
        }
        if (playPoints < 1) {
            return alert('You can play only one card per turn.')
        }
        const choosenOne = hand.find((character) => character.id === id)
        if (choosenOne === undefined) {
            throw new TypeError('No such card my friend.')
        }
        setPlayPoints(playPoints - 1)
        dispatch(Played(choosenOne))
        const attack = choosenOne.attack
        dispatch(Attack(attack))
        const index = hand.indexOf(choosenOne)
        setHand((prevHand: Character[]) => prevHand.filter((card, i) => i !== index))
    }

    const margin = calculateDeckMargin(hand.length)
    const containerMargin = calculateContainerMargin(hand.length)

    return (
        <>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {hand.map((character) => {
                    const id = character.id
                    return (
                        <div key={id} className={styles.hover} onClick={() => chooseCard(id)}>
                            <Card key={id} {...character} margin={margin}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayerOneHand