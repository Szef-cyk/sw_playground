import React, { FormEvent, useState, useRef, useCallback, MouseEventHandler, RefObject } from 'react'
import styles from './index.module.scss'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddCharacter, AddToDeck, SwitchFlag } from '../../redux/actions';
import Card from '../Card';
import { selectFlag, selectLastCharacter } from '../../redux/selectors';
import cn from 'classnames';

interface Ref {
    ref: RefObject<HTMLButtonElement>
}

const SearchBar: React.FC = () => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch();
    const usedNumbers: number[] = []
    const ref: Ref = { ref: useRef(null) };

    const handleSubmit = async () => {
        setActive(!active)

        const heroes: string[] = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Leia Organa', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Chewbacca', 'Han Solo', 'Yoda', 'Qui-Gon Jinn', 'Padmé Amidala', 'Mace Windu']
        const villains: string[] = ['Darth Vader', 'Wilhuff Tarkin', 'Palpatine', 'Darth Maul', 'Dooku', 'Grievous']
        const jedi: string[] = ['Ki-Adi-Mundi', 'Kit Fisto', 'Eeth Koth', 'Adi Gallia', 'Saesee Tiin', 'Yarael Poof', 'Plo Koon', 'Luminara Unduli', 'Barriss Offee', 'Jocasta Nu', 'Shaak Ti', 'Aayla Secura']
        const bountyHunters: string[] = ['Boba Fett', 'Jango Fett', 'IG-88', 'Bossk', 'Greedo', 'Zam Wesell']

        const calculateAttack = (name: string): number => {
            if (heroes.includes(name) || villains.includes(name)) {
                return Math.floor(Math.random() * (16 - 13 + 1) + 13)
            } else if (jedi.includes(name) || bountyHunters.includes(name)) {
                return Math.floor(Math.random() * (12 - 10 + 1) + 10)
            } else if (name === 'Jar Jar Binks') {
                return -1
            }
            return Math.floor(Math.random() * (9 - 1 + 1) + 1);
        }

        const calculateType = (name: string): string => {
            if (heroes.includes(name)) {
                return 'Hero'
            }
            if (villains.includes(name)) {
                return 'Villain'
            }
            if (jedi.includes(name)) {
                return 'Jedi'
            }
            if (bountyHunters.includes(name)) {
                return 'Bounty Hunter'
            }
            if (name === 'Jar Jar Binks') {
                return 'God Help Us'
            }
            return 'Regular'
        }

        let randomNumber = Math.floor(Math.random() * (83 - 1 + 1) + 1);
        while (usedNumbers.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (83 - 1 + 1) + 1);
        }
        usedNumbers.push(randomNumber);

        const nextCharacterId = (): string => {
            return new Date().getTime().toString()
        }

        console.log(randomNumber)
        await axios(`/${randomNumber}`, {
            method: 'get',
            baseURL: 'https://swapi.dev/api/people/',
        }).then(response => {
            const data = response.data
            const attack = calculateAttack(data.name)
            const type = calculateType(data.name)
            dispatch(AddCharacter({
                id: nextCharacterId(),
                eyecolor: data.eye_color,
                gender: data.gender,
                height: data.height,
                name: data.name,
                attack: attack,
                type: type
            }))
            dispatch(SwitchFlag())
        });
    };

    const character = useSelector(selectLastCharacter);

    const handleSubmit2 = () => {
        dispatch(AddToDeck(character))
        dispatch(SwitchFlag())
        setActive(!active)
    }

    const handleSubmit3 = () => {
        dispatch(SwitchFlag())
        setActive(!active)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.button_container}>
                    <button onClick={handleSubmit} className={cn(styles.button, { [styles.clicked]: active })} ref={ref.ref}>
                        <div className={styles.heading}>Get a Card!</div>
                    </button>
                </div>
                <div className={styles.card}>
                    {useSelector(selectFlag) ?
                        <div className={styles.flexContainer}>
                            <div className={styles.row1}>
                                <button onClick={handleSubmit2}>Add To Your Collection</button>
                                <button onClick={handleSubmit3}>Dispose Card</button>
                            </div>
                            <div className={styles.row2}>
                                <Card />
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
}

export default SearchBar