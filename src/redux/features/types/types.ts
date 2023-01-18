export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export interface Person {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

export interface Character {
    id: string,
    name: string,
    height: string,
    gender: string,
    eyecolor: string,
    attack: number,
    type: string
}

export interface Deck {
    character: Character
}

export interface Flag {
    isVisible: boolean
}