import { combineReducers, CombinedState } from "@reduxjs/toolkit";
import charactersSlice from './features/characters/charactersSlice'
import deckSlice from "./features/deck/deckSlice";
import flagSlice from "./features/flag/flagSlice";
import { Character, Deck, Flag } from "./features/types/types";

const rootReducer = combineReducers<CombinedState<{
    characters: Character[]
    deck: Deck[]
    flag: Flag
}>>({
    characters: charactersSlice,
    deck: deckSlice,
    flag: flagSlice
})

export default rootReducer 