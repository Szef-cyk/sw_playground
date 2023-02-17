import React, { useRef, useState } from 'react'
import boardBackground from '../../assets/boardBackground.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectHearts, selectPlayedCards, selectPlayedCardsTwo } from '../../redux/selectors'
import PlayerOneHand from '../../components/Hand/playerOneHand'
import styles from './index.module.scss'
import { Reset, Played, SwitchTurn, TwoLost, OneLost } from '../../redux/actions'
import PlayerTwoHand from '../../utils/playerTwoHand'
import PlayedCard from '../../components/Card/playedCard'
import heart from '../../assets/heart.png'

const BoardOne = () => {
    const playedCards = useSelector(selectPlayedCards)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const Hearts = useSelector(selectHearts)
    const playerOneHearts = Hearts.playerOne
    const playerTwoHearts = Hearts.playerTwo
    const dispatch = useDispatch()
    const attack = useSelector(selectAttack)
    const [playPoints, setPlayPoints] = useState(1.5)
    const [numberPlayedCards, setNumberPlayedCards] = useState(0)
    const playerOneAttack = attack.playerOne
    const playerTwoAttack = attack.playerTwo

    const handleButton = () => {
        if (numberPlayedCards >= 2) {
            setNumberPlayedCards(0)
            dispatch(Reset())
            dispatch(SwitchTurn())
            if (playerOneAttack > playerTwoAttack) {
                dispatch(TwoLost())
            } else {
                dispatch(OneLost())
            }
        }
        else {
            dispatch(SwitchTurn())
            setNumberPlayedCards(numberPlayedCards + 1)
            setPlayPoints(1.5)
        }
    }

    return (
        <>
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
                            {playedCards[0] ? <PlayedCard {...playedCards[0]} margin={''} /> : null
                            }
                        </div>
                    </div>
                    <div className={styles.cardBottom2}>
                        <div className={styles.card}>
                            {playedCards[1] ? <PlayedCard {...playedCards[1]} margin={''} /> : null
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
                    <PlayerOneHand playPoints={playPoints} setPlayPoints={setPlayPoints} />
                </div>
            </div>
        </>
    )
}


export default BoardOne