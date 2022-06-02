import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { PayrollProps } from '../../types/models/information';

export interface StaffPayrollState{
    loading:boolean;
    payroll : PayrollProps[];
}

const initialState: StaffPayrollState = {
    loading: false,
    payroll:[]
}

 
const staffPayrollSlice = createSlice({
    name: 'staffPayroll',
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
        setEmployeePayroll(state,action:PayloadAction<ListResponse<PayrollProps>>){
            state.payroll = action.payload.data
        }
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeePayroll} = staffPayrollSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.staffPayroll.loading;
export const selectPayroll = (state: RootState) => state.staffPayroll.payroll;

//Reducer
const staffPayrollReducer = staffPayrollSlice.reducer;
export default staffPayrollReducer;