import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import StorageKeys from '../../constants/storage-keys';
import { RootState } from '../../app/store';

export const login = createAsyncThunk(
    'auth/login',
    async (payload:any) => {
        try {            
            const isAdmin = await authApi.checkAdmin(payload);
            localStorage.setItem(StorageKeys.admin,  JSON.stringify(isAdmin.data.message));       
            const response = await authApi.login(payload);
            localStorage.setItem(StorageKeys.access, response.data.access);
            localStorage.setItem(StorageKeys.refresh, response.data.refresh);
        } catch (error:any) {
            return error.message;
        }
    }
)

export interface Props{
    accuracy: string;
 
}

const initialState: Props = {
    accuracy:localStorage.getItem(StorageKeys.admin)||""
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state,payload:PayloadAction){
            console.log("logut")
            localStorage.removeItem(StorageKeys.access)
            localStorage.removeItem(StorageKeys.refresh)
            localStorage.removeItem(StorageKeys.admin)
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(login.pending, (state) => {
            state.accuracy = localStorage.getItem(StorageKeys.admin)||"";
          })
       
        
    }
 
})

export const {
    logout
  } = AuthSlice.actions;
const authReducer = AuthSlice.reducer;
export const selectIsAdmin = (state: RootState) => state.auth.accuracy;
export default authReducer;