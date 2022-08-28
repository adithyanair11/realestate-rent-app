import {FAVOURITES_ACTION_TYPES} from './favourites.types'

const INITIAL_STATE = {
    favouriteItems: []
}

export const favouritesReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch(type){
        case FAVOURITES_ACTION_TYPES.SET_FAVOURITES:
            return{
                ...state,
                favouriteItems: payload
            }
        default:
            return state;    
    }
}