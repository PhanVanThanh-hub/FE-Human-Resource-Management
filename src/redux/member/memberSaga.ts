import { PayloadAction } from "@reduxjs/toolkit";
import { call,   put, takeLatest } from "redux-saga/effects";
import memberApi from "../../api/memberApi";
import {fetchEmployeeListSuccess,fetchData,fetchEmployeeListFailed} from './memberSlice';
import {ListResponseFilter} from '../../types/models/common';
import {InformationProps} from '../../types/models/information';

function* fetchMember(action: PayloadAction<any>){
    try {
        const responsive: ListResponseFilter<InformationProps[]>= yield call(memberApi.getAll,action.payload);
        yield put(fetchEmployeeListSuccess(responsive));
    } catch (error: any) {
        yield put(fetchEmployeeListFailed());
    }
}


export default function* memberSaga() {
 
    yield takeLatest(fetchData.type, fetchMember);
 
}