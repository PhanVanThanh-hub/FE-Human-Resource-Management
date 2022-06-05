import {  createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponseFilter } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';

export interface MemberState{
    loading:boolean;
    list:InformationProps[];
    count:number;
}

const initialState: any = {
    loading: false,
    list:[],
    count:0
}

 
const memberSlice = createSlice({
    name: 'member',
    initialState: initialState,
    reducers: {
        fetchData(state,action:PayloadAction<any>){
            state.loading = true;
        },
        fetchEmployeeListSuccess(state,action:PayloadAction<ListResponseFilter<InformationProps[]>>){
            state.list = action.payload.data.results
            state.count = action.payload.data.count
        },
        fetchEmployeeListFailed(state){
            state.loading = false;
        },
    }
});

//Actions
export const {fetchData,fetchEmployeeListSuccess,fetchEmployeeListFailed} = memberSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.member.loading;
export const selectListMember = (state: RootState) => state.member.list;
export const selectCount = (state: RootState) => state.member.count;
//Reducer
const memberReducer = memberSlice.reducer;
export default memberReducer;