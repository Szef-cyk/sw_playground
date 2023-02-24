import { AnyAction } from "@reduxjs/toolkit"
import { Actions, ActionType } from "../../actions";
import { Deck } from "../types/types";

export default function deckSlice(state: Deck = {
    one: [{
        id: '1',
        name: 'Luke Skywalker',
        height: 'Five or smth',
        gender: 'Other hyhy',
        eyecolor: 'Blyue as the Sky',
        attack: 16,
        type: 'Hero'
    }, {
        id: '2',
        name: 'Vader',
        height: 'Way too much',
        gender: 'Shouldnt asked',
        eyecolor: 'reeeeeddd',
        attack: 15,
        type: 'Villain'
    }, {
        id: '3',
        name: 'R2-D2',
        height: 'Very tiny, actually',
        gender: 'Robot-male',
        eyecolor: 'Hard to tell',
        attack: 12,
        type: 'Hero'
    }, {
        id: '4',
        name: 'R2-D2',
        height: 'Very tiny, actually',
        gender: 'Robot-male',
        eyecolor: 'Hard to tell',
        attack: 12,
        type: 'Hero'
    },
    {
        id: '5',
        name: 'Joe Biden',
        height: 'Nice Sunglasses',
        gender: 'Oldie but Goldie',
        eyecolor: 'Freedom-Blue',
        attack: 14,
        type: 'Hero'
    },
    {
        id: '6',
        name: 'Andrzej Duda',
        height: 'Round Face',
        gender: 'True Slav',
        eyecolor: 'Red and White',
        type: 'Hero',
        attack: 1,
    }

    ],
    two: [{
        id: '1',
        name: 'Luke Skywalker',
        height: 'Five or smth',
        gender: 'Other hyhy',
        eyecolor: 'Blyue as the Sky',
        attack: 16,
        type: 'Hero'
    },
    {
        id: '2',
        name: 'Vader',
        height: 'Way too much',
        gender: 'Shouldnt asked',
        eyecolor: 'reeeeeddd',
        attack: 15,
        type: 'Villain'
    },
    {
        id: '3',
        name: 'CP3O',
        height: 'Pretty tall fella',
        gender: 'Robot-male',
        eyecolor: 'Golden?',
        attack: 11,
        type: 'Hero'
    },
    {
        id: '4',
        name: 'R2-D2',
        height: 'Very tiny, actually',
        gender: 'Robot-male',
        eyecolor: 'Hard to tell',
        attack: 12,
        type: 'Hero'
    },
    {
        id: '5',
        name: 'Arnold Szwarceneger',
        height: 'Big Biceps',
        gender: 'Terminator',
        eyecolor: 'German',
        attack: 14,
        type: 'Hero'
    },
    {
        id: '6',
        name: 'Donald Trump',
        height: 'Dunno, but big hands',
        gender: 'Sigma Male',
        eyecolor: 'Orange',
        type: 'Villain',
        attack: 1,
    }]
}, action: Actions): Deck {
    switch (action.type) {
        case ActionType.TO_DECK: {
            return Object.assign({}, state, {
                [action.payload.player]: [...(state[action.payload.player]), action.payload.character]
            });
        }
        case ActionType.TO_DECK_MANY: {
            return Object.assign({}, state, {
                [action.payload.player]: [...(state[action.payload.player]), ...action.payload.characters]
            });
        }
        default:
            return state;
    }
}
