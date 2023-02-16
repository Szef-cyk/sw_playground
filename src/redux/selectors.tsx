import { RootState } from "./store";

export const selectCharacter = (state: RootState, name: string) => state.characters.find(character => character.name === name)
    ;
export const selectLastCharacter = (state: RootState) => state.characters[state.characters.length - 1];
// export const selectLastCharacter = (state: RootState) => state.characters.pop();
export const selectDeck = (state: RootState) => state.deck

export const selectHand = (state: RootState) => state.hand

export const selectFlag = (state: RootState) => state.flag.isVisible

export const selectPlayedCards = (state: RootState) => state.playedCards

export const selectPlayedCardsTwo = (state: RootState) => state.playedCardsTwo

export const selectAttack = (state: RootState) => state.attack

export const selectTurn = (state: RootState) => state.turn

export const selectHearts = (state: RootState) => state.hearts

