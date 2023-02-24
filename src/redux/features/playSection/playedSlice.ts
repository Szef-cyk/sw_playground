import { AnyAction } from "@reduxjs/toolkit"
import Deck from "../../../pages/Deck";
import { Character, PlayedCards } from "../types/types";


export default function playedCardsOneSlice(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "playedCardsOne": {
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
