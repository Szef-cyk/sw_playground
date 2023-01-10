import { AnyAction } from "@reduxjs/toolkit"
import { Character } from "../types/types";

export default function charactersSlice(state: Character[] = [], action: AnyAction): Character[] {
    switch (action.type) {
        case "add": {
            return [...state, action.payload]
        };
        default:
            return state;
    }
}
