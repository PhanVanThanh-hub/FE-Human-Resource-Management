import { call,   put, takeLatest,all,fork } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchDataSuccess,fetchData,fetchDataFailed,setEmployeeInformation,setEmployeePayroll} from './profileSlice';
import {ListResponse} from '../../types/models/common';
import {InformationProps, PayrollProps} from '../../types/models/information';
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchEmployeeProfile(action: PayloadAction<any>){
    const responsive: ListResponse<InformationProps>= yield call(employeeApi.getEmployeeDetail,action.payload);
    yield put(setEmployeeInformation(responsive));
}

function* fetchEmployeePayroll(action: PayloadAction<any>){
    const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayrollDetail,action.payload);
    yield put(setEmployeePayroll(responsive));
}

function* watchFetchEmployeeProfile(){
    yield takeLatest(fetchData.type, fetchEmployeeProfile);
}

function* watchFetchEmployeePayroll(){
    yield takeLatest(fetchData.type, fetchEmployeePayroll);
}


export default function* profileSaga() {
    try{
        yield all([
            fork(watchFetchEmployeeProfile),
            fork(watchFetchEmployeePayroll)
          ]);
        yield put(fetchDataSuccess());
    }catch (error: any) {
        yield put(fetchDataFailed());
    }
     
}