import { PayloadAction } from "@reduxjs/toolkit";
import { call,   put, takeLatest } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchEmployeeListSuccess,fetchEmployeeList,fetchEmployeeListFailed} from './employeeSlice';
import {ListResponse} from '../../types/models/common';
import {InformationProps} from '../../types/models/information';

function* fetchEmployee(action: PayloadAction<any>){
    try {
        const responsive: ListResponse<InformationProps[]>= yield call(employeeApi.getAll,action.payload);
        yield put(fetchEmployeeListSuccess(responsive));
    } catch (error: any) {
        yield put(fetchEmployeeListFailed());
    }
}


export default function* employeeSaga() {
 
    yield takeLatest(fetchEmployeeList.type, fetchEmployee);
 
}