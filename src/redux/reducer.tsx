import { combineReducers, CombinedState } from "@reduxjs/toolkit";
import charactersSlice from './features/characters/charactersSlice'
import deckSlice from "./features/deck/deckSlice";
import flagSlice from "./features/flag/flagSlice";
import handSlice from './features/playSection/handSlice'
import { Attack, Character, Deck, Flag, Game, Hearts, PlayedCards, } from "./features/types/types";
import attackSlice from "./features/playSection/attackSlice";
import heartsSlice from "./features/playSection/heartsSlice";
import gameSlice from "./features/playSection/gameSlice";
import playedCardsTwoSlice from "./features/playSection/playedSliceTwo";
import playedCardsOneSlice from "./features/playSection/playedSlice";

const rootReducer = combineReducers<CombinedState<{
    characters: Character[]
    deck: Deck
    hand: Character[]
    playedCardsOne: Character[]
    playedCardsTwo: Character[]
    flag: Flag
    attack: Attack
    hearts: Hearts
    game: Game
}>>({
    characters: charactersSlice,
    deck: deckSlice,
    flag: flagSlice,
    playedCardsOne: playedCardsOneSlice,
    playedCardsTwo: playedCardsTwoSlice,
    hand: handSlice,
    attack: attackSlice,
    hearts: heartsSlice,
    game: gameSlice
})

export default rootReducer 