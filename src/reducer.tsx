import { combineReducers, CombinedState } from "@reduxjs/toolkit";
import charactersSlice from './features/characters/charactersSlice'
import { Character, charactersState } from "./features/types/types";

const rootReducer = combineReducers<CombinedState<{
    characters: Character[]
}>>({
    characters: charactersSlice,

})

export default rootReducer