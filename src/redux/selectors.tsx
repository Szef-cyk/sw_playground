import { RootState } from "./store";

export const selectCharacter = (state: RootState, name: string) => state.characters.find(character => character.name === name)
    ;
export const selectLastCharacter = (state: RootState) => state.characters[state.characters.length - 1];
// export const selectLastCharacter = (state: RootState) => state.characters.pop();
export const selectDeckOne = (state: RootState) => state.deck.one

export const selectDeckTwo = (state: RootState) => state.deck.two

export const selectHand = (state: RootState) => state.hand

export const selectFlag = (state: RootState) => state.flag.isVisible

export const selectPlayedCardsOne = (state: RootState) => state.playedCardsOne

export const selectPlayedCardsTwo = (state: RootState) => state.playedCardsTwo

export const selectAttack = (state: RootState) => state.attack

export const selectHearts = (state: RootState) => state.hearts

export const selectPlayerOne = (state: RootState) => state.game.player.one

export const selectPlayerTwo = (state: RootState) => state.game.player.two

export const selectGame = (state: RootState) => state.game

