import { AnyAction } from "@reduxjs/toolkit"
import { Character } from "../types/types";

export default function deckSlice(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "toDeck": {
            console.log('work in progress')
            return [
                ...state,
                action.payload
            ]
        }
        default:
            return state;
    }
}
