import { call,   put, takeLatest,all,fork } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeePayroll} from './staffPayrollSlice';
import {ListResponse} from '../../types/models/common';
import {  PayrollProps} from '../../types/models/information';
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchEmployeePayroll(action: PayloadAction<any>){
    const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayrollDetail,action.payload);
    yield put(setEmployeePayroll(responsive));
}


function* watchFetchEmployeePayroll(){
    yield takeLatest(fetchData.type, fetchEmployeePayroll);
}


export default function* staffPayrollSaga() {
    try{
        yield all([
            fork(watchFetchEmployeePayroll)
          ]);
        yield put(fetchDataSuccess());
    }catch (error: any) {
        yield put(fetchDataFailed());
    }
     
}