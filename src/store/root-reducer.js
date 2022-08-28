import { combineReducers } from "redux";
import { dataReducer } from "./data/data.reducer";
import { favouritesReducer } from "./favourites/favourites.reducer";


export const rootReducer = combineReducers({
    data: dataReducer,
    favourites: favouritesReducer,
})