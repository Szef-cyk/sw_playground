export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export interface Character {
    id: string,
    name: string,
    height: number,
    gender: Gender,
    eyecolor: string
}

export interface Deck {
    character: Character
}