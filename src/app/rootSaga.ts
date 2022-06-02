import { all } from 'redux-saga/effects';
import employeeSaga from '../redux/employee/employeeSage';
import groupSaga from '../redux/group/groupSage';
import notificationSaga from '../redux/notifications/notificationsSaga';
import dashboardSaga,{dashboardFilterSaga,dashboardSalaryPerYearSaga} from '../redux/dashboard/dashboardSage';
import profileSaga from '../redux/profile/profileSage';
import managerSaga from '../redux/manager/manageSaga';
import employeeProfileSaga from '../redux/staff_profile/employeeProfileSaga';
import staffPayrollSaga from '../redux/staff_payroll/staffPayrollSaga';

export default function* rootSaga() {
    yield all([
        employeeSaga(),
        groupSaga(),
        notificationSaga(),
        dashboardSaga(),
        dashboardFilterSaga(),
        dashboardSalaryPerYearSaga(),
        profileSaga(),
        managerSaga(),
        employeeProfileSaga(),
        staffPayrollSaga()
    ]);
}