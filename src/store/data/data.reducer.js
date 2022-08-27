import { DATA_ACTION_TYPES } from "./data.types";

const INITIAL_STATE = {
    dataList: [],
    filterList: []
}

export const dataReducer = (state=INITIAL_STATE,action={}) => {
    const {type,payload} = action;
    switch(type){
        case DATA_ACTION_TYPES.SET_DATA:
            return{
                ...state,
                dataList: payload
            }
        case DATA_ACTION_TYPES.FILTER_DATA:
            return{
                ...state,
                filterList: payload
            }    
        default:
            return state;    
    }
}