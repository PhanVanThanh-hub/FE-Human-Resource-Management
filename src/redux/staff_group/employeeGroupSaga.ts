import { call,   put, takeLatest,all,fork } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchData,fetchDataFailed,setEmployeeInformation} from './employeeGroupSlice';
import {ListResponse} from '../../types/models/common';
import {InformationProps} from '../../types/models/information';
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchEmployee(action: PayloadAction<any>){
    try {
        const responsive: ListResponse<InformationProps>= yield call(employeeApi.getAllStaffGroup,action.payload);
        yield put(setEmployeeInformation(responsive));
    } catch (error: any) {
        yield put(fetchDataFailed());
    }
}


export default function* employeeGroupSaga() {
 
    yield takeLatest(fetchData.type, fetchEmployee);
 
}