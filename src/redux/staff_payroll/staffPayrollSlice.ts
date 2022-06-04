import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { PayrollProps } from '../../types/models/information';

export interface StaffPayrollState{
    loading:boolean;
    payrollPerYear : PayrollProps[];
    payroll : PayrollProps[];
}

const initialState: StaffPayrollState = {
    loading: false,
    payrollPerYear:[],
    payroll : [],
}

 
const staffPayrollSlice = createSlice({
    name: 'staffPayroll',
    initialState: initialState,
    reducers: {
        fetchData(state,action:PayloadAction<any>){
            state.loading = true;
        },
        fetchDataPerYear(state,action:PayloadAction<any>){
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
        },
        setEmployeePayrollPerYear(state,action:PayloadAction<ListResponse<PayrollProps>>){
            state.payrollPerYear = action.payload.data
        }
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeePayroll,setEmployeePayrollPerYear,fetchDataPerYear} = staffPayrollSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.staffPayroll.loading;
export const selectPayrollPerYear = (state: RootState) => state.staffPayroll.payrollPerYear;
export const selectPayroll = (state: RootState) => state.staffPayroll.payroll;

//Reducer
const staffPayrollReducer = staffPayrollSlice.reducer;
export default staffPayrollReducer;