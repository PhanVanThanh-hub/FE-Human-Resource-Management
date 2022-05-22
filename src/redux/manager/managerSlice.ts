import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { ListResponse } from '../../types/models/common';
import { InformationProps } from '../../types/models/information';

export interface ManagerState{
    loading:boolean;
    listManager:InformationProps[];
}

const initialState: ManagerState = {
    loading: false,
    listManager:[],
}

 
const managerSlice = createSlice({
    name: 'manager',
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
        setManager(state,action:PayloadAction<ListResponse<InformationProps>>){
            state.listManager = action.payload.data
        },
    }
});

//Actions
export const {fetchDataSuccess,fetchData,fetchDataFailed,setManager} = managerSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.manager.loading;
export const selectListManager = (state: RootState) => state.manager.listManager;

//Reducer
const managerReducer = managerSlice.reducer;
export default managerReducer;