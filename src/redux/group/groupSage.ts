import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import groupApi from "../../api/groupApi";
import {fetchGroupList,fetchGroupListSuccess,fetchGroupListFailed} from './groupSlice';
import {ListResponse} from '../../types/models/common';
import {GroupProps} from '../../types/models/information';

function* fetchGroup(action: PayloadAction<any>){
    try {
        const responsive: ListResponse<GroupProps[]>= yield call(groupApi.getAll);
        yield put(fetchGroupListSuccess(responsive));
    } catch (error: any) {
        yield put(fetchGroupListFailed());
    }
}

export default function* groupSaga() {
    //watch fetch student action
    yield takeLatest(fetchGroupList.type, fetchGroup);

    // yield debounce(500, studentActions.setFilterWithDebounce.type, handleSearchDebounce);
}