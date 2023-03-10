import React, { useState, useRef, RefObject, useCallback, useEffect } from 'react'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AddCharacter, AddToDeck, SwitchFlag } from '../../redux/actions';
import Card from '../Card';
import { selectFlag, selectLastCharacter } from '../../redux/selectors';
import cn from 'classnames';
import { usePeople } from '../../apollo/hooks/usePeople';
import { Player } from '../../redux/features/types/types';
// import axios from 'axios';
// import { Person } from '../../redux/features/types/types';

interface Ref {
    ref: RefObject<HTMLButtonElement>
}

const SearchBar: React.FC = () => {

    const [active, setActive] = useState(false)
    const dispatch = useDispatch();
    const usedNumbers: number[] = []
    const ref: Ref = { ref: useRef(null) };
    const objPeople = usePeople().data.allPeople.people

    // const [data, setData] = useState<Person[]>([])
    // const getData = useCallback(async () => {  //Works just as intended!
    //     const people: Person[] = []
    //     console.log('start')
    //     for (let i = 1; i <= 9; i++) {
    //         await axios(`/?page=${i}`, {
    //             method: 'get',
    //             baseURL: 'https://swapi.dev/api/people/',
    //         }).then(response => {
    //             console.log(`${i}`, 'page')
    //             const res = response.data.results
    //             people.push(res)
    //             if (i === 9) {
    //                 setData(people.flat())
    //             }
    //         })
    //     }
    // }, [])
    // useEffect(() => {
    //     getData()
    // }, [getData])   

    const handleSubmit = () => {
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
        console.log(randomNumber, 'this is important because it casuses crashes')
        const character = objPeople[randomNumber]
        const attack = calculateAttack(character.name)
        const type = calculateType(character.name)
        console.log(character)
        dispatch(AddCharacter({
            id: nextCharacterId(),
            eyecolor: character.eyeColor,
            gender: character.gender,
            height: character.height,
            name: character.name,
            attack: attack,
            type: type
        }))
        dispatch(SwitchFlag())
    };


    const character = useSelector(selectLastCharacter);

    const handleSubmit2 = () => {
        dispatch(AddToDeck(character, Player.ONE))
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
                                <button onClick={handleSubmit2} className={styles.buttonAdd}>Add To Your Collection</button>
                                <button onClick={handleSubmit3} className={styles.buttonDispose}>Dispose Card</button>
                            </div>
                            <div className={styles.row2}>
                                <Card {...character} margin={'0'} />
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
}

export default SearchBar