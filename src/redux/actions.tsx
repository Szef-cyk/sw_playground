import { Character, PlayedCards, Player } from "./features/types/types";

export enum ActionType {
    TO_DECK = 'toDeck',
    TO_DECK_MANY = 'toDeckMany'
}

export type AddToDeckAction = {
    type: ActionType.TO_DECK,
    payload: { character: Character, player: Player }

}
export type AddManyToDeckAction = {
    type: ActionType.TO_DECK_MANY,
    payload: { characters: Character[], player: Player }

}

export const AddCharacter = (character: Character) => ({ type: "add", payload: character })

export const AddToDeck = (character: Character, player: Player): AddToDeckAction => ({ type: ActionType.TO_DECK, payload: { character, player } })

export const AddManyToDeck = (characters: Character[], player: Player): AddManyToDeckAction => ({ type: ActionType.TO_DECK_MANY, payload: { characters, player } })

export const AddToHand = (character: Character) => ({ type: "addToHand", payload: character })

export const SwitchFlag = () => ({ type: 'switchFlag' })

export const PlayedCardsOne = (card: PlayedCards) => ({ type: 'playedCardsOne', payload: card })

export const PlayedCardsTwo = (card: PlayedCards) => ({ type: 'playedCardsTwo', payload: card })

export const Reset = () => ({ type: 'reset' })

export const Attack = (attack: number) => ({ type: 'playerOneAttack', payload: attack })

export const AttackTwo = (attack: number) => ({ type: 'playerTwoAttack', payload: attack })

export const OneLost = () => ({ type: 'oneLost' })

export const TwoLost = () => ({ type: 'twoLost' })

export const NextTurn = () => ({ type: 'nextTurn' })

export const SelectPlayerOne = () => ({ type: 'selectPlayerOne' })

export const SelectPlayerTwo = () => ({ type: 'selectPlayerTwo' })

export const PlayerOneTurn = () => ({ type: 'playerOneTurn' })

export const PlayerTwoTurn = () => ({ type: 'playerTwoTurn' })

export type Actions = AddToDeckAction | AddManyToDeckAction