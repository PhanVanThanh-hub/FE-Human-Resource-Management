import { configureStore,combineReducers } from '@reduxjs/toolkit';
import employeeReducer from '../redux/employee/employeeSlice';
import authReducer from '../redux/auth/AuthSlice';

const rootReducer =  combineReducers({
    employee : employeeReducer,
    auth:authReducer,
})

export const store = configureStore({
    reducer: rootReducer,

});

 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

