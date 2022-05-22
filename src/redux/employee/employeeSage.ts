import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
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
    //watch fetch student action
    yield takeLatest(fetchEmployeeList.type, fetchEmployee);

    // yield debounce(500, studentActions.setFilterWithDebounce.type, handleSearchDebounce);
}