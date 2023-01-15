import { AnyAction } from "@reduxjs/toolkit"
import { Flag } from "../types/types";

const initialState: Flag = {
    isVisible: false
}

export default function flagSlice(state: Flag = initialState, action: AnyAction): Flag {
    switch (action.type) {
        case "switchFlag": {
            return {
                ...state,
                isVisible: !state.isVisible
            }
        };
        default:
            return state;
    }
}
