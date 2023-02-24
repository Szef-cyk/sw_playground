import React, { useEffect, useRef, useState } from 'react'
import boardBackground from '../../assets/boardBackground.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectDeckOne, selectGame, selectHearts, selectPlayedCardsOne, selectPlayedCardsTwo, selectPlayerOne, } from '../../redux/selectors'
import PlayerOneHand from '../../components/Hand/playerOneHand'
import styles from './index.module.scss'
import { Reset, PlayedCardsOne, TwoLost, OneLost, AddToDeck, AddManyToDeck, PlayerOneTurn, PlayerTwoTurn, Tie, PlayerPoints } from '../../redux/actions'
import PlayerTwoHand from '../../utils/playerTwoHand'
import PlayedCard from '../../components/Card/playedCard'
import heart from '../../assets/heart.png'
import { Character, Player } from '../../redux/features/types/types'

// const state = {player: {one: true, two: true}, ture: {one: true, two: false}};
// const deck = {playerOne: [], playerTwo: []};

/// 
// component
///

// based on state
// const who = 'one';

// return <div>
//     <span>{state.player[who] && deck[who].map(card => card)}</span>
// </div>

const Board = () => {
    const dispatch = useDispatch()
    const game = useSelector(selectGame)
    const playerOne = useSelector(selectPlayerOne)
    const playedCardsOne = useSelector(selectPlayedCardsOne)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const selectPlayerOneDeck = useSelector(selectDeckOne)
    const Hearts = useSelector(selectHearts)
    const attack = useSelector(selectAttack)
    const playerOneHearts = Hearts.playerOne
    const playerTwoHearts = Hearts.playerTwo
    const playerOneAttack = attack.playerOne
    const playerTwoAttack = attack.playerTwo
    const playerOnePlayPoints = game.playPoints.one
    // const [playPoints, setPlayPoints] = useState(1.5)
    const [deck, setDeck] = useState<Character[]>([])

    useEffect(() => {
        if (playerOne) {
            setDeck(selectPlayerOneDeck)
            dispatch(PlayerOneTurn())
        } else {
            console.log('player two deck')
        }
    }, [])

    const handleButton = () => {
        if (playedCardsOne.length === 2 && playedCardsTwo.length === 2) {
            dispatch(Reset())
            dispatch(PlayerTwoTurn())
            if (playerOneAttack === playerTwoAttack) {
                dispatch(Tie())
            }
            else if (playerOneAttack > playerTwoAttack) {
                dispatch(TwoLost())
            } else {
                dispatch(OneLost())
            }
        }
        else {
            dispatch(PlayerTwoTurn())
            dispatch(PlayerPoints(Player.ONE))
        }
    }

    return (
        <> {deck.length > 0 ?
            <div className={styles.background} style={{ backgroundImage: `url(${boardBackground})` }}>
                <PlayerTwoHand />
                <div className={styles.boardContainer}>
                    <div className={styles.specialCard1}>
                        <div className={styles.specialCard}></div>
                    </div>
                    <div className={styles.specialCard2}>
                        <div className={styles.specialCard}></div>
                    </div>
                    <div className={styles.cardTop1}>
                        <div className={styles.card}>
                            {playedCardsTwo[0] ? <PlayedCard {...playedCardsTwo[0]} margin={''} /> : null
                            }
                        </div>
                    </div>
                    <div className={styles.cardTop2}>
                        <div className={styles.card}>
                            {playedCardsTwo[1] ? <PlayedCard {...playedCardsTwo[1]} margin={''} /> : null
                            }
                        </div>
                    </div>
                    <div className={styles.cardBottom1}>
                        <div className={styles.card}>
                            {playedCardsOne[0] ? <PlayedCard {...playedCardsOne[0]} margin={''} /> : null
                            }
                        </div>
                    </div>
                    <div className={styles.cardBottom2}>
                        <div className={styles.card}>
                            {playedCardsOne[1] ? <PlayedCard {...playedCardsOne[1]} margin={''} /> : null
                            }
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={handleButton}>End Turn</button>
                    </div>
                    <div className={styles.scoreTop}>
                        {Array.from(Array(playerTwoHearts || 0).keys()).map(() => {
                            return <img src={heart} alt='heart' width="40" height="40" />
                        })
                        }
                        <div className={styles.score}>{playerTwoAttack}</div>
                    </div>
                    <div className={styles.scoreBottom}>
                        <div className={styles.score}>{playerOneAttack}</div>
                        {Array.from(Array(playerOneHearts || 0).keys()).map(() => {
                            return <img src={heart} alt='heart' width="40" height="40" />
                        })
                        }
                    </div>
                </div>
                <div className={styles.handContainer}>
                    <PlayerOneHand deck={deck} />
                </div>
            </div> : null
        }
        </>
    )
}


export default Board