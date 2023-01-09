import { AnyAction } from "@reduxjs/toolkit"
import { Character, charactersState } from "../types/types";

export const initialState: Character[] = []

// type Action = {
//     type: string,
//     payload: {
//         name: string,
//         height: number,
//         gender: string,
//         eyecolor: string
//     }
// }

// function nextCharacterId(characters) {
//     const maxId = characters.reduce((maxId, character) => Math.max(character.id, maxId), -1);
//     return maxId + 1;
// }

export default function charactersSlice(state = initialState, action: AnyAction): Character[] {
    console.log(state)
    switch (action.type) {
        case "add": {
            return [
                ...state,
                action.payload
            ];
        }
        default:
            return state;
    }
}
