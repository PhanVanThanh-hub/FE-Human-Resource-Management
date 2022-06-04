import { call,   put, takeLatest,all,fork } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeePayroll,setEmployeePayrollPerYear,fetchDataPerYear} from './staffPayrollSlice';
import {ListResponse} from '../../types/models/common';
import {  PayrollProps} from '../../types/models/information';
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchEmployeePayrollPerYear(action: PayloadAction<any>){
    try{
        const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayrollStaffPerYear,action.payload);
        yield all([put(setEmployeePayrollPerYear(responsive)),put(fetchDataSuccess)]);
    } catch (error: any) {
        yield put(fetchDataFailed());
    }
}

function* fetchEmployeePayroll(action: PayloadAction<any>){
    try{
        const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayrollStaff,action.payload);
        yield all([put(setEmployeePayroll(responsive)),put(fetchDataSuccess)]);
    } catch (error: any) {
        yield put(fetchDataFailed());
    }
}


export function* employeePayrollSaga(){
    yield takeLatest(fetchData.type, fetchEmployeePayroll);
}

export function* employeePayrollPerYearSaga(){
    yield takeLatest(fetchDataPerYear.type, fetchEmployeePayrollPerYear);
}
