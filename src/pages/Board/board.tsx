import React, { useEffect, useRef, useState } from 'react'
import boardBackground from '../../assets/boardBackground.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { selectAttack, selectDeckOne, selectHearts, selectPlayedCards, selectPlayedCardsTwo, selectPlayerOne, selectTurn } from '../../redux/selectors'
import PlayerOneHand from '../../components/Hand/playerOneHand'
import styles from './index.module.scss'
import { Reset, Played, SwitchTurn, TwoLost, OneLost, AddToDeck, AddManyToDeck } from '../../redux/actions'
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
    const playerOne = useSelector(selectPlayerOne)
    const playedCards = useSelector(selectPlayedCards)
    const playedCardsTwo = useSelector(selectPlayedCardsTwo)
    const Hearts = useSelector(selectHearts)
    const attack = useSelector(selectAttack)
    const playerOneHearts = Hearts.playerOne
    const playerTwoHearts = Hearts.playerTwo
    const playerOneAttack = attack.playerOne
    const playerTwoAttack = attack.playerTwo
    const [playPoints, setPlayPoints] = useState(1.5)
    const [numberPlayedCards, setNumberPlayedCards] = useState(0)
    const selectPlayerOneDeck = useSelector(selectDeckOne)
    const playerOneDeck = selectPlayerOneDeck
    const [deck, setDeck] = useState<Character[]>([])
    const deckTwo: Character[] = [{
        id: '1',
        name: 'Luke Skywalker',
        height: 'Five or smth',
        gender: 'Other hyhy',
        eyecolor: 'Blyue as the Sky',
        attack: 15,
        type: 'Hero'
    },
    {
        id: '2',
        name: 'Vader',
        height: 'Way too much',
        gender: 'Shouldnt asked',
        eyecolor: 'reeeeeddd',
        attack: 14,
        type: 'Villain'
    },
    {
        id: '3',
        name: 'CP3O',
        height: 'Pretty tall fella',
        gender: 'Robot-male',
        eyecolor: 'Golden?',
        attack: 13,
        type: 'Hero'
    },
    {
        id: '4',
        name: 'R2-D2',
        height: 'Very tiny, actually',
        gender: 'Robot-male',
        eyecolor: 'Hard to tell',
        attack: 7,
        type: 'Hero'
    },
    {
        id: '5',
        name: 'Arnold Szwarceneger',
        height: 'Big Biceps',
        gender: 'Terminator',
        eyecolor: 'German',
        attack: 10,
        type: 'Hero'
    },
    {
        id: '6',
        name: 'Donald Trump',
        height: 'Dunno, but big hands',
        gender: 'Sigma Male',
        eyecolor: 'Orange',
        type: 'Villain',
        attack: 1,
    }]
    dispatch(AddManyToDeck(deckTwo, Player.TWO))
    //to be written selectPlayerTwoDeck

    useEffect(() => {
        if (playerOne) {
            setDeck(playerOneDeck)
            console.log('playerOneDeck?', playerOneDeck)

        } else {
            console.log('player two deck')
            // console.log(isDeckSet)
        }
    }, [])


    console.log('deck', deck)

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
                    <PlayerOneHand playPoints={playPoints} setPlayPoints={setPlayPoints} deck={deck} />
                </div>
            </div> : null
        }
        </>
    )
}


export default Board