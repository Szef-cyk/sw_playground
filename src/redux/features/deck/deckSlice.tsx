import { AnyAction } from "@reduxjs/toolkit"
import { Actions, ActionType } from "../../actions";
import { Deck } from "../types/types";

export default function deckSlice(state: Deck = {
    one: [],
    two: []
}, action: Actions): Deck {
    switch (action.type) {
        case ActionType.TO_DECK: {
            return Object.assign({}, state, {
                [action.payload.player]: [...(state[action.payload.player]), action.payload.character]
            });
        }
        case ActionType.TO_DECK_MANY: {
            return Object.assign({}, state, {
                [action.payload.player]: [...(state[action.payload.player]), action.payload.characters]
            });
        }
        default:
            return state;
    }
}
