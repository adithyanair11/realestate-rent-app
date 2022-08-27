import {createSelector} from 'reselect';

const selectDataReducer = (state) => state.data;

export const selectDataList = createSelector([selectDataReducer],(list) => list.dataList);


export const selectFilterData = createSelector([selectDataReducer],(list) => list.filterList);