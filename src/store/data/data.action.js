import { DATA_ACTION_TYPES } from "./data.types";
import {createAction} from '../../utils/reducer.utils';


export const getDataList = (data) => {
    return createAction(DATA_ACTION_TYPES.SET_DATA,data);
}

export const getFilterList = (data) => {
    return createAction(DATA_ACTION_TYPES.FILTER_DATA,data);
}

