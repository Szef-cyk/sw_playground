import { AnyAction } from "redux";
import { Actions, ActionType } from "../../actions";
import { Game } from "../types/types";



export default function attackSlice(state: Game = {
    player: {
        one: undefined,
        two: undefined
    },
    turn: {
        one: undefined,
        two: undefined
    },
    playPoints: {
        one: 1.5,
        two: 1.5
    }
}, action: Actions): Game {
    switch (action.type) {
        case ActionType.SELECT_PLAYER_ONE: {
            return Object.assign({}, state, {
                player: {
                    one: true,
                    two: false
                }
            });
        }
        case ActionType.SELECT_PLAYER_TWO: {
            return Object.assign({}, state, {
                player: {
                    one: false,
                    two: true
                }
            });
        }
        case ActionType.PLAYER_ONE_TURN: {
            return Object.assign({}, state, {
                turn: {
                    one: true,
                    two: false
                }
            });
        }
        case ActionType.PLAYER_TWO_TURN: {
            return Object.assign({}, state, {
                turn: {
                    one: false,
                    two: true
                }
            });
        }
        case ActionType.PLAY_POINTS: {
            return Object.assign({}, state, {
                playPoints: {
                    ...state.playPoints,
                    [action.payload.player]: 1.5
                }
            });
        }
        case ActionType.PLAY_POINT_LOST:

            const updatedPlayPoints = {
                ...state.playPoints,
                [action.payload.player]: state.playPoints[action.payload.player] - 1
            };
            return {
                ...state,
                playPoints: updatedPlayPoints
            };
        default:
            return state
    }
}