import { stat } from "fs";
import { Character } from "./features/types/types";
import { RootState } from "./store";

export const selectCharacter = (state: RootState, name: string) => state.characters.find(character => character.name === name);
export const selectLastCharacter = (state: RootState) => state.characters.pop();
