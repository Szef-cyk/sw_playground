import React, { useState } from 'react'
import { selectGame, selectHand, selectPlayedCardsOne } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Card from '../Card'
import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse'
import calculateDeckMargin from '../../utils/calculateDeckMargin'
import calculateContainerMargin from '../../utils/calculateContainerMargin'
import { Attack, PlayedCardsOne, PlayerPointLost } from '../../redux/actions'
import { Character, Player } from '../../redux/features/types/types'



const PlayerOneHand: React.FC<{ deck: Character[] }> = ({ deck }) => {
    const game = useSelector(selectGame)
    const [hand, setHand] = useState(deck)
    const played = useSelector(selectPlayedCardsOne)
    const dispatch = useDispatch();
    const chooseCard = (id: string) => {
        if (played.length === 2) {
            return alert('You played all the cards. End Turn.')
        }
        if (game.playPoints.one < 1) {
            return alert('You can play only one card per turn.')
        }
        const choosenOne = hand.find((character) => character.id === id)
        if (choosenOne === undefined) {
            throw new TypeError('No such card my friend.')
        }
        dispatch(PlayerPointLost(Player.ONE))
        dispatch(PlayedCardsOne(choosenOne))
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