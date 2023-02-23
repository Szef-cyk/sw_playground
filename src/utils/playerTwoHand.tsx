import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeckTwo, selectGame, selectPlayedCardsTwo, } from '../redux/selectors'
import styles from './index.module.scss'
import calculateDeckMargin from './calculateDeckMargin'
import calculateContainerMargin from './calculateContainerMargin'
import { Character } from '../redux/features/types/types'
import CardBack from '../components/Card/cardBack'
import { PlayerOneTurn } from '../redux/actions'

const PlayerTwoHand = () => {
    const dispatch = useDispatch();
    const deck = useSelector(selectDeckTwo)
    const [hand, setHand] = useState<Character[]>(deck)
    const played = useSelector(selectPlayedCardsTwo)
    const [values, setValues] = useState<number[]>([])
    const [selectedCard, setSelectedCard] = useState<Character>();
    const game = useSelector(selectGame)

    useEffect(() => {
        if (selectedCard || !hand.length) return;
        if (game.turn.two) {
            const randomCard = hand[Math.floor(Math.random() * hand.length)];
            setHand(hand.filter(card => card.id !== randomCard?.id));
            setSelectedCard(randomCard);
            dispatch(PlayerOneTurn())
        }
    }, [game.turn.two]);

    useEffect(() => {
        if (game.turn.one === undefined) return console.log;
        if (game.turn.one) return console.log;
        setSelectedCard(undefined);
    }, [game.turn.one])

    const margin = calculateDeckMargin(hand.length)
    const containerMargin = calculateContainerMargin(hand.length)

    return (
        <>
            <div className={styles.deckContainer} style={{ margin: containerMargin }}>
                {hand.map((character) => {
                    const id = character.id
                    return (
                        <div key={id} className={styles.hover} >
                            <CardBack key={id} {...character} margin={margin}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlayerTwoHand