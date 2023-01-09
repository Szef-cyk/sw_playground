import { Character } from "./features/types/types";

export const AddCharacter = (character: Character) => ({ type: "add", payload: character })