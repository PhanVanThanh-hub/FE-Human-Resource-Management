import { call,   put, takeLatest } from "redux-saga/effects";
import memberApi from "../../api/memberApi";
import {fetchDataSuccess,fetchDataFailed,fetchTransitionGroup} from './groupMemberSlice';
import { PayloadAction } from "@reduxjs/toolkit";

function* TransitionGroupEmployee(action: PayloadAction<any>){
    try{
        yield call(memberApi.transitionGroup,action.payload);
        yield put(fetchDataSuccess());
    }catch(error){
        yield put(fetchDataFailed());
    }   
}

export default function* groupMemberSaga() {
    yield takeLatest(fetchTransitionGroup.type, TransitionGroupEmployee);
}