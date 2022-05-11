import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import employeeApi from '../../api/employeeApi';
import { RootState } from '../../app/store';

export const postEmployee = createAsyncThunk(
    'addEmployee',
    async (payload:any) => {
        
            const response = await employeeApi.addEmployee(payload);
            return response.data
        
    }
)
 
const initialState: any = {
    loading: false,
}

 
const employeeSlice = createSlice({
    name: 'employee',
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
    }
});

//Actions
export const {fetchData,fetchDataSuccess,fetchDataFailed} = employeeSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.employee.loading;
 

//Reducer
const employeeReducer = employeeSlice.reducer;
export default employeeReducer;