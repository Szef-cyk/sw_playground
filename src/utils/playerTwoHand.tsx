import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectDeckTwo, selectGame, selectPlayedCardsOne, selectPlayedCardsTwo, } from '../redux/selectors'
import styles from './index.module.scss'
import calculateDeckMargin from './calculateDeckMargin'
import calculateContainerMargin from './calculateContainerMargin'
import { Character, Player } from '../redux/features/types/types'
import CardBack from '../components/Card/cardBack'
import { AttackTwo, FirstTurn, OneLost, PlayedCardsTwo, PlayerOneTurn, PlayerPointLost, PlayerPoints, PlayerTwoTurn, Reset, Tie, TwoLost } from '../redux/actions'

const PlayerTwoHand = () => {
    const dispatch = useDispatch();
    const deck = useSelector(selectDeckTwo)
    const attack = useSelector(selectAttack)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const playedCardsOne = useSelector(selectPlayedCardsOne)
    const game = useSelector(selectGame)
    const [hand, setHand] = useState<Character[]>(deck)
    const [selectedCard, setSelectedCard] = useState<Character>();
    const playerOneAttack = attack.playerOne
    const playerTwoAttack = attack.playerTwo

    const isTurnTwoEnding = playedCardsTwo.length === 2 && playedCardsOne.length === 2 && game.turn.firstTurn === Player.TWO;
    const [isFirstEffectTriggered, setIsFirstEffectTriggered] = useState(false);


    useEffect(() => {
        if (isTurnTwoEnding) {
            console.log("TWO ends turn")
            if (playerOneAttack === playerTwoAttack) {
                dispatch(Tie())
            }
            else if (playerOneAttack > playerTwoAttack) {
                dispatch(TwoLost())
            } else {
                dispatch(OneLost())
            }
            dispatch(Reset())
            dispatch(PlayerOneTurn())
            dispatch(FirstTurn(Player.ONE))
            setIsFirstEffectTriggered(true);
        }
    }, [game.turn.two, isTurnTwoEnding])


    useEffect(() => {
        if (isFirstEffectTriggered || selectedCard || !hand.length) return;
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
    }, [game.turn.two, isFirstEffectTriggered]);

    useEffect(() => {
        if (game.turn.one === undefined) return console.log;
        if (game.turn.one) return console.log;
        dispatch(PlayerPoints(Player.TWO))
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