import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SelectPlayerOne, SelectPlayerTwo } from '../../redux/actions';
import styles from "./index.module.scss";

const Play = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h1>Choose Side</h1>
                <Link to='/board' className={styles.text} onClick={() => dispatch(SelectPlayerOne())}>Player One</Link>
                <Link to='/board' className={styles.text} onClick={() => dispatch(SelectPlayerTwo())}>Player Two</Link>
            </div>
        </>
    )
}

export default Play