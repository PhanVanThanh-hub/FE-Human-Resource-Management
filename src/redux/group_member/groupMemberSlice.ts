import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';

export interface GroupMemberState{
    loading:boolean;
    listManager:InformationProps[];
}

const initialState: GroupMemberState = {
    loading: false,
    listManager:[],
}

 
const groupMemberSlice = createSlice({
    name: 'groupMember',
    initialState: initialState,
    reducers: {
        fetchData(state){
            state.loading = true;
        },
        fetchDataSuccess(state){
            state.loading = false;
        },
        fetchDataFailed(state){
            state.loading = false;
        },
        setManager(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.listManager = action.payload.data
        },
        fetchTransitionGroup(state, action:PayloadAction<any>){
            state.loading = true;
        }
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setManager,fetchTransitionGroup} = groupMemberSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.groupMember.loading;
export const selectListManager = (state: RootState) => state.groupMember.listManager;

//Reducer
const groupMemberReducer = groupMemberSlice.reducer;
export default groupMemberReducer;