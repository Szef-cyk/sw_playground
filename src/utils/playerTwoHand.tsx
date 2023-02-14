import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeck, selectHand, selectPlayedCards, selectPlayedCardsTwo, selectTurn } from '../redux/selectors'
import styles from './index.module.scss'
import calculateDeckMargin from './calculateDeckMargin'
import calculateContainerMargin from './calculateContainerMargin'
import { Attack, AttackTwo, Played, PlayedTwo } from '../redux/actions'
import { Character } from '../redux/features/types/types'
import CardBack from '../components/Card/cardBack'

const PlayerTwoHand = () => {
    const deck = [{
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
        attack: 24,
        type: 'Hero'
    }
    ]


    const turn = useSelector(selectTurn)
    const [hand, setHand] = useState(deck.slice())
    const played = useSelector(selectPlayedCardsTwo)
    const dispatch = useDispatch();
    const firstUpdate = useRef(true);
    const [usedNumbers, setUsedNumbers] = useState([0])

    useLayoutEffect(() => {
        if (hand.length === 0) {
            return;
        }
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const chooseCard = (id: string) => {
            if (played.length === 2) {
                return alert('You played all the cards. End Turn.')
            }
            const choosenOne = hand.find((character) => character.id === id)
            if (choosenOne === undefined) {
                throw new TypeError('No such card my friend.')
            }
            dispatch(PlayedTwo(choosenOne))
            const attack = choosenOne.attack
            dispatch(AttackTwo(attack))
            const index = hand.indexOf(choosenOne)
            setHand((prevHand: Character[]) => prevHand.filter((card, i) => i !== index))
        }
        let randomNumber = 0
        function getRandomNumber() {
            if (usedNumbers.length === 4) {
                console.log('You generated all the numbers')
            }
            randomNumber = Math.floor(Math.random() * 4) + 1;
            if (!usedNumbers.includes(randomNumber)) {
                setUsedNumbers(prevUsedNumbers => [...prevUsedNumbers, randomNumber])
                console.log(randomNumber)
                console.log(usedNumbers)
                return randomNumber
            } else {
                getRandomNumber()
            }
            return randomNumber
        }
        let generatedNumber = getRandomNumber().toString()
        chooseCard(generatedNumber)
    }, [turn]);

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