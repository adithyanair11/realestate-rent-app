import {FAVOURITES_ACTION_TYPES} from './favourites.types';
import { createAction } from '../../utils/reducer.utils';

const addListItem = (favList,itemToAdd) => {
    const existingFavItem = favList.find(item => item.id === itemToAdd.id);
    if(existingFavItem){
        return removeListItem(favList,itemToAdd);
    }
    favList.push(itemToAdd);
    return favList;
}

const removeListItem = (favList,itemToRemove) => {
    return favList.filter(item => item.id !== itemToRemove.id);
}


export const addItemToList = (favList,itemToAdd) => {
    const newItemList = addListItem(favList,itemToAdd);
    return createAction(FAVOURITES_ACTION_TYPES.SET_FAVOURITES,newItemList)
}

// export const removeItemFromList = (favList,itemToRemove) => {
//     const newItemList = removeListItem(favList,itemToRemove);
//     return createAction(FAVOURITES_ACTION_TYPES.SET_FAVOURITES,newItemList);
// }