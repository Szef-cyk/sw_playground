import { combineReducers, CombinedState } from "@reduxjs/toolkit";
import charactersSlice from './features/characters/charactersSlice'
import deckSlice from "./features/deck/deckSlice";
import flagSlice from "./features/flag/flagSlice";
import playedSlice from './features/playSection/playedSlice'
import handSlice from './features/playSection/handSlice'
import { Attack, Character, Deck, Flag, Game, Hearts, PlayedCards, Turn } from "./features/types/types";
import attackSlice from "./features/playSection/attackSlice";
import turnSlice from "./features/flag/turnSlice";
import playedSliceTwo from "./features/playSection/playedSliceTwo";
import heartsSlice from "./features/playSection/heartsSlice";
import gameSlice from "./features/playSection/gameSlice";

const rootReducer = combineReducers<CombinedState<{
    characters: Character[]
    deck: Deck
    hand: Character[]
    playedCards: Character[]
    playedCardsTwo: Character[]
    flag: Flag
    attack: Attack
    turn: Turn
    hearts: Hearts
    game: Game
}>>({
    characters: charactersSlice,
    deck: deckSlice,
    flag: flagSlice,
    playedCards: playedSlice,
    playedCardsTwo: playedSliceTwo,
    hand: handSlice,
    attack: attackSlice,
    turn: turnSlice,
    hearts: heartsSlice,
    game: gameSlice
})

export default rootReducer 