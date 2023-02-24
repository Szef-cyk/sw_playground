import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectDeckTwo, selectGame, selectPlayedCardsOne, selectPlayedCardsTwo, } from '../redux/selectors'
import styles from './index.module.scss'
import calculateDeckMargin from './calculateDeckMargin'
import calculateContainerMargin from './calculateContainerMargin'
import { Character } from '../redux/features/types/types'
import CardBack from '../components/Card/cardBack'
import { AttackTwo, OneLost, PlayedCardsTwo, PlayerOneTurn, PlayerTwoTurn, Reset, Tie, TwoLost } from '../redux/actions'

const PlayerTwoHand = () => {
    const dispatch = useDispatch();
    const deck = useSelector(selectDeckTwo)
    const attack = useSelector(selectAttack)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const playedCardsOne = useSelector(selectPlayedCardsOne)
    const game = useSelector(selectGame)
    const [hand, setHand] = useState<Character[]>(deck)
    const [selectedCard, setSelectedCard] = useState<Character>();
    // const [numberPlayedCards, setNumberPlayedCards] = useState(0)
    const playerOneAttack = attack.playerOne
    const playerTwoAttack = attack.playerTwo

    useEffect(() => {
        if (playedCardsTwo.length === 2 && playedCardsOne.length === 2) {
            console.log('first condition')
            // setNumberPlayedCards(0)
            dispatch(Reset())
            dispatch(PlayerOneTurn())
            if (playerOneAttack === playerTwoAttack) {
                dispatch(Tie())
            }
            else if (playerOneAttack > playerTwoAttack) {
                dispatch(TwoLost())
            } else {
                dispatch(OneLost())
            }
        }
    }, [])


    useEffect(() => {
        if (selectedCard || !hand.length) return;
        if (game.turn.two) {
            console.log('second condition')
            const randomCard = hand[Math.floor(Math.random() * hand.length)];
            setHand(hand.filter(card => card.id !== randomCard?.id));
            setSelectedCard(randomCard);
            dispatch(PlayerOneTurn())
            dispatch(PlayedCardsTwo(randomCard))
            const attack = randomCard.attack
            dispatch(AttackTwo(attack))
            // setNumberPlayedCards(numberPlayedCards + 1)
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