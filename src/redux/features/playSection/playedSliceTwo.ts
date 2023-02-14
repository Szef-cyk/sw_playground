import { AnyAction } from "@reduxjs/toolkit"
import Deck from "../../../pages/Deck";
import { Character, PlayedCards } from "../types/types";


export default function playedSliceTwo(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "playedTwo": {
            return [
                ...state,
                action.payload
            ]
        }
        case 'reset':
            return [];
        default:
            return state;
    }

}
