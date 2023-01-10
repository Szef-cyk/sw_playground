import { AnyAction } from "@reduxjs/toolkit"
import { Deck } from "../types/types";

export default function deckSlice(state: Deck[] = [], action: AnyAction): Deck[] {
    switch (action.type) {
        case "toDeck": {
            console.log('work in progress')
            return [
                ...state,
                { character: action.payload }
            ]
        }
        default:
            return state;
    }
}
