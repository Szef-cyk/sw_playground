import { type } from "os";
import { Character, PlayedCards, Player } from "./features/types/types";

export enum ActionType {
    TO_DECK = 'toDeck',
    TO_DECK_MANY = 'toDeckMany',
    PLAY_POINTS = 'playPoints',
    PLAY_POINT_LOST = 'playPointLost',
    SELECT_PLAYER_ONE = 'selectPlayerOne',
    SELECT_PLAYER_TWO = 'selectPlayerTwo',
    PLAYER_ONE_TURN = 'playerOneTurn',
    PLAYER_TWO_TURN = 'playerTwoTurn',
    FIRST_TURN = 'firstTurn'

}

export type FirstTurnAction = {
    type: ActionType.FIRST_TURN,
    payload: { player: Player }
}

export type SelectPlayerOneAction = {
    type: ActionType.SELECT_PLAYER_ONE
}
export type SelectPlayerTwoAction = {
    type: ActionType.SELECT_PLAYER_TWO
}
export type PlayerOneTurnAction = {
    type: ActionType.PLAYER_ONE_TURN
}

export type PlayerTwoTurnAction = {
    type: ActionType.PLAYER_TWO_TURN,
}

export type SetPlayPointsAction = {
    type: ActionType.PLAY_POINTS,
    payload: { player: Player }
}
export type SetPlayPointLostAction = {
    type: ActionType.PLAY_POINT_LOST,
    payload: { player: Player }
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

export const PlayerPoints = (player: Player) => ({ type: ActionType.PLAY_POINTS, payload: { player } })

export const PlayerPointLost = (player: Player) => ({ type: ActionType.PLAY_POINT_LOST, payload: { player } })

export const FirstTurn = (player: Player) => ({ type: ActionType.FIRST_TURN, payload: { player } })

export const AddToHand = (character: Character) => ({ type: "addToHand", payload: character })

export const SwitchFlag = () => ({ type: 'switchFlag' })

export const PlayedCardsOne = (card: PlayedCards) => ({ type: 'playedCardsOne', payload: card })

export const PlayedCardsTwo = (card: PlayedCards) => ({ type: 'playedCardsTwo', payload: card })

export const Reset = () => ({ type: 'reset' })

export const Attack = (attack: number) => ({ type: 'playerOneAttack', payload: attack })

export const AttackTwo = (attack: number) => ({ type: 'playerTwoAttack', payload: attack })

export const OneLost = () => ({ type: 'oneLost' })

export const TwoLost = () => ({ type: 'twoLost' })

export const Tie = () => ({ type: 'tie' })

export const NextTurn = () => ({ type: 'nextTurn' })

export const SelectPlayerOne = () => ({ type: ActionType.SELECT_PLAYER_ONE })

export const SelectPlayerTwo = () => ({ type: ActionType.SELECT_PLAYER_TWO })

export const PlayerOneTurn = () => ({ type: ActionType.PLAYER_ONE_TURN })

export const PlayerTwoTurn = () => ({ type: ActionType.PLAYER_TWO_TURN })


export type Actions = AddToDeckAction | AddManyToDeckAction | SetPlayPointsAction | SetPlayPointLostAction | SelectPlayerOneAction | SelectPlayerTwoAction | PlayerOneTurnAction | PlayerTwoTurnAction | FirstTurnAction