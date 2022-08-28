import {createSelector} from 'reselect';


const selectFavouritesReducer = (state) => state.favourites;


export const selectFavourites = createSelector([selectFavouritesReducer],(items) => items.favouriteItems);
