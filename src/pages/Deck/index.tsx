import React from 'react'
import { selectDeck } from '../../redux/selectors'
import { useSelector } from 'react-redux'


const Deck = () => {
    const deck = useSelector(selectDeck)
    console.log(deck)

    return (
        <>
            <div>Your Deck:</div>
            {deck.map((character) => {
                const { name, id, height, eyecolor, gender } = character.character
                return <p key={id}>
                    {name} {height} {gender} {eyecolor}
                </p>
            })}
        </>
    )
}

export default Deck