import { call,   put, takeLatest } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {setManager,fetchData,fetchDataSuccess,fetchDataFailed} from './managerSlice';
import {ListResponse} from '../../types/models/common';
import {InformationProps} from '../../types/models/information';
import {ROLE_STAFF} from '../../constants/employee';
 
function* fetchManagerList(){
    try{
        const responsive: ListResponse<InformationProps>= yield call(employeeApi.getAll,{
            role:ROLE_STAFF.MANAGER
        });
        yield put(setManager(responsive));
        yield put(fetchDataSuccess());
    }catch(error){
        yield put(fetchDataFailed());
    }   
}

export default function* managerSaga() {
    yield takeLatest(fetchData.type, fetchManagerList);
}