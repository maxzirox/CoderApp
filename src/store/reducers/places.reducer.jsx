import { ADD_PLACE } from './places.action'

import { Place } from '../../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            // newPlace = new Place(Date.now(), action.payload.title)
            return {
                ...state,
                //places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}