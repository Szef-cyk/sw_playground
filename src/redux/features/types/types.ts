
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

export interface Ship extends Omit<Character, 'gender' | 'eyecolor'> {
    depth: number;
};

export type PlayedCards = Character | Ship;

/// reducer playedCards: Card[]

/// deck -> { character: Character[] }

/// deck -> Character[]

export interface Flag {
    isVisible: boolean
}
export interface Turn {
    turn?: boolean
}

export interface Attack {
    playerOne: number,
    playerTwo: number
}

export interface Hearts {
    playerOne: number,
    playerTwo: number
}

export interface Game {
    player: {
        one?: boolean,
        two?: boolean
    }
    turn: {
        firstTurn?: Player,
        one?: boolean,
        two?: boolean
    }
    playPoints: {
        one: number,
        two: number
    }
}

export interface Deck {
    one: Character[],
    two: Character[]
}

export enum Player {
    ONE = 'one',
    TWO = 'two'
}