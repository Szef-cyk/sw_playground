import { RootState } from "./store";

export const selectCharacter = (state: RootState, name: string) => state.characters.find(character => character.name === name);
export const selectLastCharacter = (state: RootState) => state.characters[state.characters.length - 1];
// export const selectLastCharacter = (state: RootState) => state.characters.pop();
export const selectDeck = (state: RootState) => state.deck
