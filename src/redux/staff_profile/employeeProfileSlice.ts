import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';
import {INITIAL_STAFF} from '../../constants/employee';

export interface ProfileState{
    loading:boolean;
    employee:any;
}

const initialState: ProfileState = {
    loading: false,
    employee:"",
}

 
const employeeProfileSlice = createSlice({
    name: 'employeeProfile',
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
export const {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeeInformation} = employeeProfileSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.employeeProfile.loading;
export const selectProfile = (state: RootState) => state.employeeProfile.employee;

//Reducer
const employeeProfileReducer = employeeProfileSlice.reducer;
export default employeeProfileReducer;