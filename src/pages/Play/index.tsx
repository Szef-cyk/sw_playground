import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BoardOne from '../Boards/playerOne'
import Hand from '../../components/Hand/playerOneHand'
import { AddToHand } from '../../redux/actions'
import { selectDeck, selectHand } from '../../redux/selectors'
import styles from "./index.module.scss";

const Play = () => {
    // const deck = useSelector(selectDeck)
    // const hand = deck
    // const isHand = useSelector(selectHand)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(AddToHand(hand))
    //     return
    // }, [])

    return (
        <>
            <div>
                <h1>Choose Side</h1>
                <Link to='/playerOne' className={styles.text}>Player One</Link>
                <Link to='/playerTwo' className={styles.text}>Player Two</Link>
            </div>
        </>
    )
}

export default Play