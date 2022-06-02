
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const accessToken = localStorage.getItem(StorageKeys.access)

const authApi = {
    checkAdmin(data:any){
        const url = 'decentralization/';
        return axiosClient.post(url, data);
    },
    login(data:any) {
        const url = '/api/token/';
        return axiosClient.post(url, data);
    },
    getUser(params:any) {
        const accessToken = localStorage.getItem(StorageKeys.access)
        const newParams = { ...params }
        const url = `users/`;
        const response =  axiosClient.get(url, {
            params: { ...newParams },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }); 
        return response
    },
    getProfile(params:any) {
        const data = { ...params }
        const response =  axiosClient.post(`profile/`, {
            data: { ...data },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response
    },
    changeProfile(params:any) {
        const newParams = { ...params }
        const response =  axiosClient.post(`/changeProfile/`, {
            data: { ...newParams },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response
    },
    
}

export default authApi