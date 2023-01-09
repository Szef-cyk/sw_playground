import { AnyAction } from "@reduxjs/toolkit";
const initialState: [] = []

// function nextFilmId(films) {
//     const maxId = films.reduce((maxId, film) => Math.max(film.id, maxId), -1);
//     return maxId + 1;
// }

export default function filmsReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case "films/filmAdded": {
            const { name } = action.payload
            return [
                ...state,
                {
                    // id: nextFilmId(state),
                    name
                }
            ];
        }
        default:
            return state;
    }
}
