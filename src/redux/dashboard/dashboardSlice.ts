import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse,ListResponseFilter } from '../../types/models/common';
import { InformationProps,GroupProps,PayrollProps } from '../../types/models/information';

export interface DashboardState{
    loading:boolean;
    listEmployee:InformationProps[];
    listPayroll : PayrollProps[];
    listGroup:GroupProps[];
    listEmployeeFilter :InformationProps[];
    listPayrollPerYear:PayrollProps[];
}

const initialState: DashboardState = {
    loading: false,
    listEmployee:[],
    listPayroll:[],
    listGroup:[],
    listEmployeeFilter:[],
    listPayrollPerYear:[]
}

 
const dashboardSlice = createSlice({
    name: 'dashboard',
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
        fetchDataFilter(state,action:PayloadAction<any>){
            state.loading=true;
        },
        fetchDataFilterPayroll(state,action:PayloadAction<any>){
            state.loading=true;
        },
        setEmployeeList(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.listEmployee=action.payload.data
        },
        setGroupList(state,action:PayloadAction<ListResponse<GroupProps>>){
            state.listGroup = action.payload.data
        },
        setListPayroll(state,action:PayloadAction<ListResponse<PayrollProps>>){
            state.listPayroll = action.payload.data
        },
        setEmployeeFilter(state,action:PayloadAction<ListResponseFilter<InformationProps>>){
            state.listEmployeeFilter = action.payload.data.results
        },
        setPayrollFilter(state,action:PayloadAction<ListResponse<PayrollProps>>){
            state.listPayrollPerYear = action.payload.data
        }
         
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFilter,fetchDataFailed,setEmployeeList,setGroupList,setListPayroll,setEmployeeFilter,setPayrollFilter,fetchDataFilterPayroll} = dashboardSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.dashboard.loading;
export const selectEmployeeList = (state: RootState) => state.dashboard.listEmployee;
export const selectGroupList = (state: RootState) => state.dashboard.listGroup;
export const selectPayrollList = (state: RootState) => state.dashboard.listPayroll;
export const selectEmployeeFilter = (state: RootState) => state.dashboard.listEmployeeFilter;
export const selectPayrollPerYear = (state: RootState) => state.dashboard.listPayrollPerYear;
//Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;