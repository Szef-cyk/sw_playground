import { AnyAction } from "@reduxjs/toolkit"
import Deck from "../../../pages/Deck";
import { Character, PlayedCards } from "../types/types";


export default function playedCardsTwoSlice(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "playedCardsTwo": {
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
