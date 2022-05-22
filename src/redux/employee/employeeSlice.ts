import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import employeeApi from '../../api/employeeApi';
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';

export const postEmployee = createAsyncThunk(
    'addEmployee',
    async (payload:any) => {
        
            const response = await employeeApi.addEmployee(payload);
            return response.data
        
    }
)
 
export interface EmployeeState{
    loading:boolean;
    list:InformationProps[];
}

const initialState: any = {
    loading: false,
    list:[]
}

 
const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        fetchEmployeeList(state,action:PayloadAction<any>){
            state.loading = true;
        },
        fetchDataSuccess(state){
            state.loading = false;
        },
        fetchDataFailed(state){
            state.loading = false;
        },
        fetchEmployeeListSuccess(state,action:PayloadAction<ListResponse<InformationProps[]>>){
            state.list = action.payload.data
        },
        fetchEmployeeListFailed(state){
            state.loading = false;
        },
    }
});

//Actions
export const {fetchEmployeeList,fetchDataSuccess,fetchDataFailed,fetchEmployeeListSuccess,fetchEmployeeListFailed} = employeeSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.employee.loading;
export const selectListEmployee = (state: RootState) => state.employee.list;

//Reducer
const employeeReducer = employeeSlice.reducer;
export default employeeReducer;