import { combineReducers, CombinedState } from "@reduxjs/toolkit";
import charactersSlice from './features/characters/charactersSlice'
import deckSlice from "./features/deck/deckSlice";
import { Character, Deck } from "./features/types/types";

const rootReducer = combineReducers<CombinedState<{
    characters: Character[]
    deck: Deck[]
}>>({
    characters: charactersSlice,
    deck: deckSlice,
})

export default rootReducer