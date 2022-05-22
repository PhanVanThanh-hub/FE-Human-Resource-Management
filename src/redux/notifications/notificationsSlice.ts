import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';

export interface NotificationState{
    loading:boolean;
    listBirthday:InformationProps[];
    listJoinDate : InformationProps[];
}

const initialState: NotificationState = {
    loading: false,
    listBirthday:[],
    listJoinDate:[]
}

 
const notificationSlice = createSlice({
    name: 'notification',
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
        fetchEmployeeBirthday(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.listBirthday = action.payload.data
        },
        fetchEmployeeJoinDate(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.listJoinDate = action.payload.data
        }
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,fetchEmployeeBirthday,fetchEmployeeJoinDate} = notificationSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.notification.loading;
export const selectListBirthday = (state: RootState) => state.notification.listBirthday;
export const selectListJoinDate = (state: RootState) => state.notification.listJoinDate;

//Reducer
const notificationReducer = notificationSlice.reducer;
export default notificationReducer;