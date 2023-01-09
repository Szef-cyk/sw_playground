import { AnyAction } from "@reduxjs/toolkit"
import { Character, charactersState } from "../types/types";

const initialState: Character[] = []

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
const nextCharacterId = () => {
    return
}


export default function charactersSlice(state = initialState, action: AnyAction): Character[] {
    switch (action.type) {
        case "add": {
            const { name, height, gender, eyecolor } = action.payload
            return [
                ...state,
                {
                    // id: nextCharacterId(state),
                    name,
                    height,
                    gender,
                    eyecolor
                }
            ];
        }
        default:
            return state;
    }
}
