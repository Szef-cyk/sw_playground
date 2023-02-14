import { Character, PlayedCards } from "./features/types/types";

export const AddCharacter = (character: Character) => ({ type: "add", payload: character })

export const AddToDeck = (character: Character) => ({ type: "toDeck", payload: character })

export const AddToHand = (character: Character) => ({ type: "addToHand", payload: character })

export const SwitchFlag = () => ({ type: 'switchFlag' })

export const Played = (card: PlayedCards) => ({ type: 'played', payload: card })

export const PlayedTwo = (card: PlayedCards) => ({ type: 'playedTwo', payload: card })

export const Reset = () => ({ type: 'reset' })

export const Attack = (attack: number) => ({ type: 'playerOneAttack', payload: attack })

export const AttackTwo = (attack: number) => ({ type: 'playerTwoAttack', payload: attack })

export const SwitchTurn = () => ({ type: 'turnSwitch' })