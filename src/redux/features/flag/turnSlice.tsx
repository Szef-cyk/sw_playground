import { AnyAction } from "@reduxjs/toolkit"
import { Flag, Turn } from "../types/types";

const initialState: Turn = {
    turn: undefined
}

export default function turnSlice(state: Turn = initialState, action: AnyAction): Turn {
    switch (action.type) {
        case "turnSwitch": {
            return {
                ...state,
                turn: !state.turn
            }
        };
        default:
            return state;
    }
}
