import { AnyAction } from "redux";
import { Game } from "../types/types";

export default function attackSlice(state: Game = {
    player: {
        one: undefined,
        two: undefined
    },
    turn: {
        one: undefined,
        two: undefined
    }
}, action: AnyAction): Game {
    switch (action.type) {
        case ('selectPlayerOne'): {
            return Object.assign({}, state, {
                player: {
                    one: true,
                    two: false
                }
            });
        }
        case ('selectPlayerTwo'): {
            return Object.assign({}, state, {
                player: {
                    one: false,
                    two: true
                }
            });
        }
        case ('playerOneTurn'): {
            return Object.assign({}, state, {
                turn: {
                    one: true,
                    two: false
                }
            });
        }
        case ('playerTwoTurn'): {
            return Object.assign({}, state, {
                turn: {
                    one: false,
                    two: true
                }
            });
        }

        default:
            return state
    }
}