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
            try{
                const username = JSON.parse(response.config.data).username
                const responseUser = await authApi.getUser({ username: username })
                const user = {...responseUser.data[0]}
                const responseProfile = await authApi.getProfile(user)   
                const profile = {...responseProfile.data.user}
                localStorage.setItem(StorageKeys.user, JSON.stringify(profile));
            } catch (error){
                console.log("error:",error)
            }
             
        } catch (error:any) {
            return error.message;
        }
    }
)

export interface Props{
    accuracy: string;
    user:any;
}

const initialState: Props = {
    accuracy:localStorage.getItem(StorageKeys.admin)||"",
    user:"",
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state,payload:PayloadAction){
            localStorage.removeItem(StorageKeys.access)
            localStorage.removeItem(StorageKeys.refresh)
            localStorage.removeItem(StorageKeys.admin)
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(login.pending, (state) => {
            state.accuracy = localStorage.getItem(StorageKeys.admin)||"";
            state.user=localStorage.getItem(StorageKeys.user)||"";
          })
       
        
    }
 
})

export const {
    logout
  } = AuthSlice.actions;
const authReducer = AuthSlice.reducer;
export const selectIsAdmin = (state: RootState) => state.auth.accuracy;
export const selectUser = (state:RootState) =>state.auth.user;
export default authReducer;