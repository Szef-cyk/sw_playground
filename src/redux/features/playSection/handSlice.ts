import { AnyAction } from "@reduxjs/toolkit"
import Deck from "../../../pages/Deck";
import { Character, PlayedCards } from "../types/types";


export default function playedSlice(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "played": {
            const id = action.payload.id
            return state.filter(character => character.id !== id)
        }
        case "addToHand": {
            return [
                ...state,
                action.payload
            ]
        }
        default:
            return state;
    }
}
