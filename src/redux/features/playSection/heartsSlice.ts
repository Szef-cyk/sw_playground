import { AnyAction } from "@reduxjs/toolkit"
import { Hearts } from "../types/types";


export default function playedSlice(state: Hearts = {
    playerOne: 3,
    playerTwo: 3
}, action: AnyAction): Hearts {
    switch (action.type) {
        case "oneLost": {
            return Object.assign({}, state, {
                playerOne: state.playerOne - 1
            })
        }
        case 'twoLost': {
            return Object.assign({}, state, {
                playerTwo: state.playerTwo - 1
            })
        }
        // case ('reset'): {
        //     return Object.assign({}, state, {
        //         playerOne: 3,
        //         playerTwo: 3
        //     });
        // }
        default:
            return state;
    }

}
