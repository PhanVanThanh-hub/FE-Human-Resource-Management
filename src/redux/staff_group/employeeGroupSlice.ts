import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';
import {INITIAL_STAFF} from '../../constants/employee';

export interface GroupState{
    loading:boolean;
    employee:any;
}

const initialState: GroupState = {
    loading: false,
    employee:"",
}

 
const employeeGroupSlice = createSlice({
    name: 'employeeGroup',
    initialState: initialState,
    reducers: {
        fetchData(state,action:PayloadAction<any>){
            state.loading = true;
        },
        fetchDataSuccess(state){
            state.loading = false;
        },
        fetchDataFailed(state){
            state.loading = false;
        },
        setEmployeeInformation(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.employee=action.payload.data
            state.loading = false;
        },
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeeInformation} = employeeGroupSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.employeeGroup.loading;
export const selectEmployeeGroup = (state: RootState) => state.employeeGroup.employee;

//Reducer
const employeeGroupReducer = employeeGroupSlice.reducer;
export default employeeGroupReducer;