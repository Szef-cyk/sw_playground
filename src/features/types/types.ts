export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export interface Character {
    // id: number,
    name: string,
    height: number,
    gender: Gender,
    eyecolor: string
}

export type charactersState = {
    name: string
    characters: Character[]
}

