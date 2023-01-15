import { Character } from "./features/types/types";

export const AddCharacter = (character: Character) => ({ type: "add", payload: character })

export const AddToDeck = (character: Character) => ({ type: "toDeck", payload: character })

export const SwitchFlag = () => ({ type: 'switchFlag' })