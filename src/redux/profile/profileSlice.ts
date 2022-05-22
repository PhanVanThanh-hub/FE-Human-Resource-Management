import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps,PayrollProps } from '../../types/models/information';
import {INITIAL_STAFF} from '../../constants/employee';

export interface ProfileState{
    loading:boolean;
    employee:any;
    payroll : PayrollProps[];
}

const initialState: ProfileState = {
    loading: false,
    employee:"",
    payroll:[]
}

 
const profileSlice = createSlice({
    name: 'profile',
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
        },
        setEmployeePayroll(state,action:PayloadAction<ListResponse<PayrollProps>>){
            state.payroll = action.payload.data
        }
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeeInformation,setEmployeePayroll} = profileSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.profile.loading;
export const selectEmployee = (state: RootState) => state.profile.employee;
export const selectPayroll = (state: RootState) => state.profile.payroll;

//Reducer
const profileReducer = profileSlice.reducer;
export default profileReducer;