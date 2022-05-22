import { call, all, put, takeLatest } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {fetchEmployeeBirthday,fetchData,fetchEmployeeJoinDate,fetchDataSuccess,fetchDataFailed} from './notificationsSlice';
import {ListResponse} from '../../types/models/common';
import {InformationProps} from '../../types/models/information';

const month = new Date().getMonth() + 1;

function* fetchEmployeeBirthdayList(){
    const responsive: ListResponse<InformationProps>= yield call(employeeApi.getAll,{
        birthday:1
    });
    yield put(fetchEmployeeBirthday(responsive));
}

function* fetchEmployeeJoinDateList(){
    const responsive: ListResponse<InformationProps>= yield call(employeeApi.getAll,{
        join_date:month
    });
    yield put(fetchEmployeeJoinDate(responsive));
}

function* fetchNotificationData() {
    try {
        yield all([
            call(fetchEmployeeBirthdayList),
            call(fetchEmployeeJoinDateList),
        ]);
        yield put(fetchDataSuccess());
    } catch (error: any) {
        console.log(error.message);
        yield put(fetchDataFailed());
    }
}

export default function* notificationSaga() {
    yield takeLatest(fetchData.type, fetchNotificationData);
}