import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectDeckTwo, selectGame, selectPlayedCardsOne, selectPlayedCardsTwo, } from '../redux/selectors'
import styles from './index.module.scss'
import calculateDeckMargin from './calculateDeckMargin'
import calculateContainerMargin from './calculateContainerMargin'
import { Character, Player } from '../redux/features/types/types'
import CardBack from '../components/Card/cardBack'
import { AttackTwo, PlayedCardsTwo, PlayerOneTurn, PlayerPointLost, PlayerPoints } from '../redux/actions'

const PlayerTwoHand = () => {
    const dispatch = useDispatch();
    const deck = useSelector(selectDeckTwo)
    const attack = useSelector(selectAttack)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const playedCardsOne = useSelector(selectPlayedCardsOne)
    const game = useSelector(selectGame)
    const [hand, setHand] = useState<Character[]>(deck)
    const [selectedCard, setSelectedCard] = useState<Character>();

    useEffect(() => {
        if (selectedCard || !hand.length) return console.log('empty hand');
        if (game.turn.two) {
            const randomCard = hand[Math.floor(Math.random() * hand.length)];
            setHand(hand.filter(card => card.id !== randomCard?.id));
            const attack = randomCard.attack
            dispatch(PlayerPointLost(Player.TWO))
            setSelectedCard(randomCard);
            dispatch(PlayedCardsTwo(randomCard))
            dispatch(AttackTwo(attack))
            dispatch(PlayerOneTurn())
        }
    }, [game.turn, hand, playedCardsOne, playedCardsTwo])

    // useEffect(() => {
    //     if (playedCardsTwo.length === 2 && playedCardsOne.length === 2 && game.turn.firstTurn === Player.TWO) {
    //         console.log("TWO ends turn")
    //         if (playerOneAttack === playerTwoAttack) {
    //             dispatch(Tie())
    //         }
    //         else if (playerOneAttack > playerTwoAttack) {
    //             dispatch(TwoLost())
    //         } else {
    //             dispatch(OneLost())
    //         }
    //         dispatch(Reset())
    //         dispatch(PlayerOneTurn())
    //         dispatch(FirstTurn(Player.ONE))
    //     }
    // }, [game.turn])

    useEffect(() => {
        if (game.turn.one === undefined) return console.log;
        if (!hand.length) return console.log('the end');
        if (game.turn.one) return console.log;
        dispatch(PlayerPoints(Player.TWO))
        setSelectedCard(undefined);
    }, [game])

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