import { configureStore,combineReducers } from '@reduxjs/toolkit';
import employeeReducer from '../redux/employee/employeeSlice';
import authReducer from '../redux/auth/AuthSlice';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from '../utils/saga/history';
import rootSaga from './rootSaga';
import groupReducer from '../redux/group/groupSlice';
import notificationReducer from '../redux/notifications/notificationsSlice';
import dashboardReducer from '../redux/dashboard/dashboardSlice';
import profileReducer from '../redux/profile/profileSlice';
import managerReducer from '../redux/manager/managerSlice';
import employeeProfileReducer from '../redux/staff_profile/employeeProfileSlice';
import staffPayrollReducer from '../redux/staff_payroll/staffPayrollSlice';
import employeeGroupReducer from '../redux/staff_group/employeeGroupSlice';
import memberReducer from '../redux/member/memberSlice';
import groupMemberReducer from '../redux/group_member/groupMemberSlice';

const sagaMiddleware = createSagaMiddleware();
const rootReducer =  combineReducers({
    router: connectRouter(history),
    employee : employeeReducer,
    auth:authReducer,
    group:groupReducer,
    notification:notificationReducer,
    dashboard:dashboardReducer,
    profile:profileReducer,
    manager:managerReducer,
    employeeProfile:employeeProfileReducer,
    staffPayroll:staffPayrollReducer,
    employeeGroup:employeeGroupReducer,
    member:memberReducer,
    groupMember:groupMemberReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware(history)), //thêm saga middleware và routerMiddleware
});

sagaMiddleware.run(rootSaga) //saga middleware chạy rootSaga 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

