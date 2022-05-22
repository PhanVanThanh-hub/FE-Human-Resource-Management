import { call, all, put, takeLatest } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import groupApi from '../../api/groupApi';
import {fetchData,fetchDataSuccess,fetchDataFailed,setEmployeeList,setGroupList,setListPayroll,setEmployeeFilter,fetchDataFilter,fetchDataFilterPayroll,setPayrollFilter} from './dashboardSlice';
import {ListResponse,ListResponseFilter} from '../../types/models/common';
import {InformationProps,GroupProps,PayrollProps} from '../../types/models/information';
import { PayloadAction } from "@reduxjs/toolkit";
 

function* fetchEmployeeList(){
    const responsive: ListResponse<InformationProps>= yield call(employeeApi.getAll,{});
    yield put(setEmployeeList(responsive));
}

function* fetchGroupList(){
    const responsive: ListResponse<GroupProps>= yield call(groupApi.getAll);
    yield put(setGroupList(responsive));
}
function* fetchPayrollList(){
    const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayroll,{});
    yield put(setListPayroll(responsive));
}
function* fetchEmployeeListFilter(action: PayloadAction<any>){
    const responsive: ListResponseFilter<InformationProps>= yield call(employeeApi.getEmployeeSalary,action.payload);
    yield put(setEmployeeFilter(responsive));
}
function* fetchPayrollPerYear(action: PayloadAction<any>){
    const responsive: ListResponse<PayrollProps>= yield call(employeeApi.getPayroll,action.payload);
    yield put(setPayrollFilter(responsive));
}

function* fetchDashboardData() {
    try {
        yield all([
            call(fetchEmployeeList),
            call(fetchGroupList),
            call(fetchPayrollList)
        ]);
        yield put(fetchDataSuccess());
    } catch (error: any) {
        console.log(error.message);
        yield put(fetchDataFailed());
    }
}

export default function* dashboardSaga() {
    yield takeLatest(fetchData.type, fetchDashboardData);
}

export  function* dashboardFilterSaga() {
    yield takeLatest(fetchDataFilter.type, fetchEmployeeListFilter);
}

export function* dashboardSalaryPerYearSaga(){
    yield takeLatest(fetchDataFilterPayroll.type, fetchPayrollPerYear);
}