import React, { FormEvent, useState, useRef, useCallback } from 'react'
import styles from './index.module.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddCharacter } from '../../actions';
import { Gender } from '../../features/types/types';

const SearchBar: React.FC = () => {
    const [formData, setFormData] = useState({
        input: ''
    });
    const [flag, setFlag] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const reset = useCallback(() => {
        setFlag(false)
        setFormData({
            input: ''
        })
    }, [])

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setFormData({ input: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        const nextCharacterId = (): string => {
            return new Date().getTime().toString()
        }
        event.preventDefault();
        formRef.current?.reset()
        await axios(`/${formData.input}`, {
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

            console.log(response.data);
        });
        setFlag(true)
    };

    const dispatch = useDispatch();

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} autoComplete='off'>
                <label htmlFor="number"></label>
                <input type="number" name="number" onChange={handleChange} />
                {!flag ? null : null}
            </form>
            <button onClick={reset}>clear the results</button>
        </>
    )
}

export default SearchBar