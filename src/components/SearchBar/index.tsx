import React, { FormEvent, useState, useRef, useCallback, MouseEventHandler } from 'react'
import styles from './index.module.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddCharacter } from '../../redux/actions';


const SearchBar: React.FC = () => {

    const usedNumbers: number[] = []

    const handleSubmit = async () => {
        let randomNumber = Math.floor(Math.random() * (83 - 1 + 1) + 1);
        while (usedNumbers.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (83 - 1 + 1) + 1);
        }
        usedNumbers.push(randomNumber);

        const nextCharacterId = (): string => {
            return new Date().getTime().toString()
        }
        await axios(`/${randomNumber}`, {
            method: 'get',
            baseURL: 'https://swapi.dev/api/people/',
        }).then(response => {
            const data = response.data
            dispatch(AddCharacter({
                id: nextCharacterId(),
                eyecolor: data.eye_color,
                gender: data.gender,
                height: data.height,
                name: data.name
            }))
        });
    };

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={handleSubmit as any}>Get a Card!</button>
        </>
    )
}

export default SearchBar