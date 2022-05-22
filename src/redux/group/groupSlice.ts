import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { GroupProps } from '../../types/models/information';

export interface GroupState{
    loading:boolean;
    list:GroupProps[];
}

const initialState: any = {
    loading: false,
    list:[]
}

 
const groupSlice = createSlice({
    name: 'group',
    initialState: initialState,
    reducers: {
        fetchGroupList(state,action:PayloadAction<any>){
            state.loading = true;
        },
        fetchGroupListSuccess(state,action:PayloadAction<ListResponse<GroupProps[]>>){
            state.list = action.payload.data
        },
        fetchGroupListFailed(state){
            state.loading = false;
        },
    }
});

//Actions
export const {fetchGroupList,fetchGroupListSuccess,fetchGroupListFailed} = groupSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.group.loading;
export const selectListGroup = (state: RootState) => state.group.list;

//Reducer
const groupReducer = groupSlice.reducer;
export default groupReducer;