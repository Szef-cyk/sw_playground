import { AnyAction } from "redux";
import { Attack } from "../types/types";

export default function attackSlice(state: Attack = {
    playerOne: 0,
    playerTwo: 0
}, action: AnyAction): Attack {
    switch (action.type) {
        case ('playerOneAttack'): {
            return Object.assign({}, state, {
                playerOne: state.playerOne + action.payload
            });
        }
        case ('playerTwoAttack'): {
            return Object.assign({}, state, {
                playerTwo: state.playerTwo + action.payload
            });
        }
        case ('reset'): {
            return Object.assign({}, state, {
                playerOne: 0,
                playerTwo: 0
            });
        }
        default:
            return state
    }
}